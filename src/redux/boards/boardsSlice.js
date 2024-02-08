import { createSlice } from '@reduxjs/toolkit'
import { fetchBoards, addBoard, editBoard, deleteBoard } from './operations'

const handlePending = state => {
    state.isLoading = true
}
  
const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload
}
  
const boardsSlice = createSlice({
    name: 'contacts',
    initialState: {
      boards: [],
      isLoading: false,
      error: null,
    },
    extraReducers: {
        [fetchBoards.pending]: handlePending,
        [addBoard.pending]: handlePending,
        [editBoard.pending]: handlePending,
        [deleteBoard.pending]: handlePending,
        [fetchBoards.rejected]: handleRejected,
        [addBoard.rejected]: handleRejected,
        [editBoard.rejected]: handleRejected,
        [deleteBoard.rejected]: handleRejected,
        [fetchBoards.fulfilled](state, action) {
            state.isLoading = false
            state.error = null
            state.boards = action.payload
        },
        [addBoard.fulfilled](state, action) {
            state.isLoading = false
            state.error = null
            state.boards.push(action.payload)
        },
        [editBoard.fulfilled](state, action) {
            state.isLoading = false
            state.error = null
            const index = state.boards.findIndex(
                board => board.id === action.payload.id
            )
            state.boards[index] = action.payload
        },
        [deleteBoard.fulfilled](state, action) {
            state.isLoading = false
            state.error = null
            const index = state.boards.findIndex(
                board => board.id === action.payload.id
            )
            state.boards.splice(index, 1)
        },
    },
})
  
export const boardsReducer = boardsSlice.reducer