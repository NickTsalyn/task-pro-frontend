import { createSlice } from '@reduxjs/toolkit';
import {
  fetchBoards,
  addBoard,
  getBoardById,
  editBoard,
  deleteBoard,
} from './operations';
import { addColumn, deleteColumn, editColumn } from 'redux/columns/operations';
import {
  addTask,
  changeColumnTask,
  deleteTask,
  editTask,
} from 'redux/tasks/operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const boardsSlice = createSlice({
  name: 'boards',
  initialState: {
    currentBoard: {
      _id: '',
      title: '',
      columns: [],
      owner: '',
      background: '',
      icon: '',
    },
    boards: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchBoards.pending]: handlePending,
    [addBoard.pending]: handlePending,
    [getBoardById.pending]: handlePending,
    [editBoard.pending]: handlePending,
    [deleteBoard.pending]: handlePending,
    [addColumn.pending]: handlePending,
    [deleteColumn.pending]: handlePending,
    [editColumn.pending]: handlePending,
    [addTask.pending]: handlePending,
    [deleteTask.pending]: handlePending,
    [editTask.pending]: handlePending,
    [changeColumnTask.pending]: handlePending,

    [fetchBoards.rejected]: handleRejected,
    [addBoard.rejected]: handleRejected,
    [getBoardById.rejected]: handleRejected,
    [editBoard.rejected]: handleRejected,
    [deleteBoard.rejected]: handleRejected,
    [addColumn.rejected]: handleRejected,
    [deleteColumn.rejected]: handleRejected,
    [editColumn.rejected]: handleRejected,
    [addTask.rejected]: handleRejected,
    [deleteTask.rejected]: handleRejected,
    [editTask.rejected]: handleRejected,
    [changeColumnTask.rejected]: handleRejected,

    [fetchBoards.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;

      state.boards = action.payload;
    },
    [addBoard.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;

      state.boards.push(action.payload);
    },
    [getBoardById.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.currentBoard = action.payload;
    },
    [editBoard.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;

      const index = state.boards.findIndex(
        board => board._id === action.payload._id
      );
      state.boards[index] = action.payload;

      const { title, icon, background } = action.payload;
      state.currentBoard = { ...state.currentBoard, title, icon, background };
    },
    [deleteBoard.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;

      const index = state.boards.findIndex(
        board => board._id === action.payload._id
      );
      state.boards.splice(index, 1);
      state.currentBoard = {
        _id: '',
        title: '',
        columns: [],
        owner: '',
        background: '',
        icon: '',
      };
    },

    [addColumn.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;

      state.currentBoard.columns.push(action.payload);
    },
    [deleteColumn.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;

      const columnIndex = state.currentBoard.columns.findIndex(
        column => column._id === action.payload._id
      );
      state.currentBoard.columns.splice(columnIndex, 1);
    },
    [editColumn.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;

      const { _id, title } = action.payload;
      const columnIndex = state.currentBoard.columns.findIndex(
        column => column._id === _id
      );
      state.currentBoard.columns[columnIndex].title = title;
    },

    [addTask.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;

      const columnIndex = state.currentBoard.columns.findIndex(
        column => column._id === action.payload.columnID
      );
      state.currentBoard.columns[columnIndex].tasks.push(action.payload);
    },
    [deleteTask.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;

      const { id, columnID } = action.payload;
      const columnIndex = state.currentBoard.columns.findIndex(
        column => column._id === columnID
      );
      const taskIndex = state.currentBoard.columns[columnIndex].tasks.findIndex(
        task => task._id === id
      );
      state.currentBoard.columns[columnIndex].tasks.splice(taskIndex, 1);
    },
    [editTask.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;

      const columnIndex = state.currentBoard.columns.findIndex(
        column => column._id === action.payload.columnID
      );
      const taskIndex = state.currentBoard.columns[columnIndex].tasks.findIndex(
        task => task._id === action.payload._id
      );
      state.currentBoard.columns[columnIndex].tasks[taskIndex] = {
        ...state.currentBoard.columns[columnIndex].tasks[taskIndex],
        ...action.payload,
      };
    },
    [changeColumnTask.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;

      const { id, prevColumnID, newColumnID } = action.payload;
      const prevColumnIndex = state.currentBoard.columns.findIndex(
        column => column._id === prevColumnID
      );
      const newColumnIndex = state.currentBoard.columns.findIndex(
        column => column._id === newColumnID
      );
      const taskIndex = state.currentBoard.columns[
        prevColumnIndex
      ].tasks.findIndex(task => task._id === id);
      const deletedTask = state.currentBoard.columns[
        prevColumnIndex
      ].tasks.splice(taskIndex, 1);
      state.currentBoard.columns[newColumnIndex].tasks = [
        ...state.currentBoard.columns[newColumnIndex].tasks,
        ...deletedTask,
      ];
    },
  },
});

export const boardsReducer = boardsSlice.reducer;
