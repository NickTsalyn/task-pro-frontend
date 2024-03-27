import { createSlice } from '@reduxjs/toolkit';
import { getAllColumns } from './operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const columnSlice = createSlice({
  name: 'columns',
  initialState: {
    columns: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [getAllColumns.pending]: handlePending,    
    [getAllColumns.rejected]: handleRejected,
    [getAllColumns.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.columns = action.payload;
    },
  },
});

export const columnReducer = columnSlice.reducer;
