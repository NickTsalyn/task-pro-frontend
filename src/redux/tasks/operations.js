import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://task-pro-backend-a1c2.onrender.com';

//get all tasks
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

// add card

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async ({ title, description, priority, deadline, columnId }, thunkAPI) => {
    // try {
    const response = await axios.post(`/api/tasks/${columnId}/addTask`, {
      title,
      description,
      priority,
      deadline,
    });
    console.log(response);
    return response.data;
    // }
    // } catch (error) {
    //     return thunkAPI.rejectWithValue(error.message);
    // }
  }
);

// get taskId
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

//  edit card

export const editTask = createAsyncThunk(
  'tasks/editTask',
  async (
    { title, description, priority, deadline, taskId, column },
    thunkAPI
  ) => {
    try {
      const response = await axios.patch(`/api/tasks/${taskId}`, {
        title,
        description,
        priority,
        deadline,
        column,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// delete card
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

// move textDecorationSkip:
