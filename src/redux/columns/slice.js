import { createSlice } from '@reduxjs/toolkit';
import { getAllColumns, getColumsById } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  columns: [],
  isLoading: false,
  error: null,
};

const columnSlice = createSlice({
  name: 'columns',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(getAllColumns.pending, handlePending)
      .addCase(getAllColumns.rejected, handleRejected)
      .addCase(getAllColumns.fulfilled, (state, action) => {
        state.isLoading = false;
        state.columns = action.payload;
        state.error = null;
      })

      .addCase(getColumsById.pending, handlePending)
      .addCase(getColumsById.rejected, handleRejected)
      .addCase(getColumsById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      });
  },
});

export const columnReducer = columnSlice.reducer;
