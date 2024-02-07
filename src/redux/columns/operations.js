import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
const instance = axios.create({
  baseURL: 'https://task-pro-backend-a1c2.onrender.com/',
});


  export const addColumn = createAsyncThunk(
    'columns/addColumn',
    async ({ title, owner }, thunkAPI) => {
        try {
            const { data } = await instance.post(`api/column/add`, {
                title,
                owner,
            });

            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
  
  export const deleteColumn = createAsyncThunk(
    'columns/deleteColumn',
    async (columnId, thunkAPI) => {
      try {
        const { data } = await instance.delete(`api/column/delete/${columnId}`);
  
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  
  export const editColumn = createAsyncThunk(
    'columns/editColumn',
    async ({ columnId, title }, thunkAPI) => {
      try {
        const { data } = await instance.put(`api/column/edit/${columnId}`, { title });
  
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  

  export const getAllColumns = createAsyncThunk(
    'columns/getAllColumns',
    async (_, thunkAPI) => {
        try {
            const { data } = await instance.get(`api/column`);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

  

  export const getColumnById = createAsyncThunk(
    'columns/getColumnById',
    async (columnId, thunkAPI) => {
        try {
            const { data } = await instance.get(`api/column/${columnId}`);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);