import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://task-pro-backend-a1c2.onrender.com';

//get all columns
export const getAllColumns = createAsyncThunk(
  'columns/getAllColumns',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/api/columns');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getColumsById = createAsyncThunk(
  'colums/getById',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/api/columns/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// add column
export const addColumn = createAsyncThunk(
  'columns/addColumn',
  async ({ dashboardId, title, owner }, thunkAPI) => {
    try {
      const response = await axios.post(`/api/columns/${dashboardId}/addColumn`, {
        title,
        owner,
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// edit column
export const editColumn = createAsyncThunk(
  'columns/editColumn',
  async ({ id, updatedData }, thunkAPI) => {
    try {
      const response = await axios.patch(`/api/columns/${id}`, { updatedData });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// delete column
export const deleteColumn = createAsyncThunk(
  'columns/deleteColumn',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/api/columns/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// get column by id
// export const getColumnById = createAsyncThunk(
//   'columns/getColumnById',
//   async (id, thunkAPI) => {
//     try {
//       const response = await axios.get(`api/columns/${id}`);
//       return response.data;;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
