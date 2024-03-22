import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3232';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const fetchBoards = createAsyncThunk(
  'boards/fetchAll',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    setAuthHeader(persistedToken);
    try {
      const res = await axios.get('/api/boards');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addBoard = createAsyncThunk(
  'boards/addBoard',
  async (board, thunkAPI) => {
    try {
      const res = await axios.post('/api/boards/', board);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editBoard = createAsyncThunk(
  'boards/editBoard',
  async (data, thunkAPI) => {
    try {
      const res = await axios.put(`/api/boards/${data._id}`, data.info);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteBoard = createAsyncThunk(
  'boards/deleteBoard',
  async (id, thunkAPI) => {
    try {
      const res = await axios.delete(`/api/boards/${id}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getBoardById = createAsyncThunk(
  'board/getById',
  async (_id, thunkAPI) => {
    try {
      const res = await axios.get(`/api/boards/${_id}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
