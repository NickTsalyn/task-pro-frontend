import { createSlice } from '@reduxjs/toolkit';
import { fetchCurrentUser } from './operations';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userName: '',
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [fetchCurrentUser.pending](state) {
      state.isLoading = true;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.userName = action.payload.name;
    },
    [fetchCurrentUser.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  }
})
export const getUser = state => state.user;

export const userReducer = userSlice.reducer;