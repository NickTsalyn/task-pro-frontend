import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://task-pro-backend-a1c2.onrender.com';
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const sendHelpRequest =  createAsyncThunk(
  'user/needhelp',
  async (needHelpData, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('User not authenticated');
    }
    
    
    
    try {
      setAuthHeader(persistedToken);
      console.log("data In CAT",needHelpData);
      const res = await axios.post('/api/users/needHelp', needHelpData);
      
      toast.success(`Request sent successfully!`);
      console.log("result",res.data)
      return res.data;
    } catch (error) {
      console.log("error",error)
      toast.error('Error send request ');
        return thunkAPI.rejectWithValue(error.response.data.message);
      }
    }
  );