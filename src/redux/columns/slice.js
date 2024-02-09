import { createSlice } from '@reduxjs/toolkit';
import {
  getAllColumns,
  addColumn,
  deleteColumn,
  editColumn,
} from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  columns: [],
  bordId: '',
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
      .addCase(addColumn.pending, handlePending)
      .addCase(addColumn.rejected, handleRejected)
      .addCase(addColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.columns.push(action.payload);
        state.error = null;
      })
      .addCase(deleteColumn.pending, handlePending)
      .addCase(deleteColumn.rejected, handleRejected)
      .addCase(deleteColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.columns.findIndex(
          // item => item._id === action.payload._id
          column => column.id === action.payload.id
        );
        state.columns.splice(index, 1);
       
      })
      .addCase(editColumn.pending, handlePending)
      .addCase(editColumn.rejected, handleRejected)
      .addCase(editColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        // const { _id, title } = action.payload;
        const { id, title } = action.payload;
        // const columnIndex = state.columns.findIndex(item => item._id === _id);
        const columnIndex = state.columns.findIndex(column => column.id === id);
        state.columns[columnIndex].title = title;
        
      });
  },
});

// export default columnSlice.reducer;
export const columnReducer = columnSlice.reducer;