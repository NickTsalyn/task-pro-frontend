import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://task-pro-backend-a1c2.onrender.com';

//get all columns
export const getAllColumns = createAsyncThunk(
  'columns/getAllColumns',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/column');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// add column
export const addColumn = createAsyncThunk(
  'columns/addColumn',
  async ({ title, owner }, thunkAPI) => {
    try {
      const response = await axios.post(`/addColumn`, {
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
      const response = await axios.put(`/column/${id}`, updatedData);
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
      const response = await axios.delete(`/column/${id}`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
