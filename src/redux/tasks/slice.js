import { createSlice } from "@reduxjs/toolkit";
import { fetchTitle, addTask, deleteTask,editTask } from "./operations";

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    owner: true,
    isLoading: false,
    error: null,
    filter: '',
  },

  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setSelectedPriority: (state, action) => {
      state.selectedPriority = action.payload;
    },
  },
  extraReducers: {
    [fetchTitle.pending](state) {
      state.isLoading = true;
    },
    [fetchTitle.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.tasks = action.payload;
      // console.log(state.tasks); // змінено з state.cards на state.tasks
    },
    [fetchTitle.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addTask.pending](state) {
      state.isLoading = true;
    },
    [addTask.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.tasks.push(action.payload);
    },
    [addTask.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteTask.pending](state) {
      state.isLoading = true;
    },
    [deleteTask.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.tasks.findIndex(
        task => task.id === action.payload.id)
    state.tasks.splice(index, 1)
    },
    [deleteTask.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [editTask.pending](state) {
      state.isLoading = true;
    },
    [editTask.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.tasks.findIndex(
        task => task.id === action.payload.id
    )
    state.tasks[index] = action.payload
    },
    [editTask.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
      
    },
  },
});
export const { setFilter, setSelectedPriority } = tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;
