import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://task-pro-backend-a1c2.onrender.com';
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const sendHelpRequest =  createAsyncThunk(
    'user/needhelp',
    async (needHelpData, thunkAPI) => {
      console.log("data In CAT",needHelpData)
      try {
        const res = await axios.post('/api/users/needHelp', needHelpData);
        setAuthHeader(res.data.token);
        console.log("result",res.data)
        return res.data;
      } catch (error) {
        console.log("error",error)
        return thunkAPI.rejectWithValue(error.response.data.message);
      }
    }
  );