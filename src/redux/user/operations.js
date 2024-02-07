import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://task-pro-backend-a1c2.onrender.com';

export const fetchCurrentUser = createAsyncThunk(
  'current/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/api/users/current');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);