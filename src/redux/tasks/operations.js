import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://task-pro-backend-a1c2.onrender.com';

export const fetchTitle = createAsyncThunk(
  'tasks/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/api/tasks');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async ({ title, description, priority, deadline, columnId }, thunkAPI) => {
    try {
      const response = await axios.post(`/api/tasks/${columnId}`, {
        title,
        description,
        priority,
        deadline,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getTask = createAsyncThunk(
  'tasks/getTask',
  async ({ id }, thunkAPI) => {
    try {
      const tasks = await thunkAPI.get(`/api/tasks/${id}`);
      const task = tasks.find(task => task.id === id);
      return task;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editTask = createAsyncThunk(
  'tasks/editTask',
  async (
    { title, description, priority, deadline, taskId, columnID },
    thunkAPI
  ) => {
    try {
      const response = await axios.put(`/api/tasks/${taskId}`, {
        title,
        description,
        priority,
        deadline,
        columnID,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changeColumnTask = createAsyncThunk(
  'tasks/changeColumn',
  async ({ taskId, columnID }, thunkAPI) => {
    try {
      const res = await axios.patch(`/api/tasks/${taskId}`, { columnID });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const dndMovement = createAsyncThunk(
  'tasks/dndMovement',
  async (
    { taskID, finishTaskIndex, startColumnID, finishColumnID },
    thunkAPI
  ) => {
    try {
      const res = await axios.patch(`/api/tasks/dnd/${taskID}`, {
        finishTaskIndex,
        startColumnID,
        finishColumnID,
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (Id, thunkAPI) => {
    try {
      const response = await axios.delete(`/api/tasks/${Id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
