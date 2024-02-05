import { createSlice } from '@reduxjs/toolkit';

import {
  register,
  login,
  refreshUser,
  // logout,

  // updateAvatar,
} from './operations';

const initialState = {
  user: { name: null, email: null, avatar: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  isError: false,
  errorMessage: null,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending](state) {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = null;
    },
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoading = false;
      state.isLoggedIn = true;
    },
    [register.rejected](state, action) {
      state.isLoading = false;
      const errorMessage = action.payload;
      if (errorMessage === 'Email in use') {
        state.errorMessage = errorMessage;
      } else {
        state.isError = true;
      }
    },
    [login.pending](state) {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = null;
    },
    [login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoading = false;
      state.isLoggedIn = true;
    },
    [login.rejected](state, action) {
      state.isLoading = false;
      state.errorMessage = action.payload;
      state.isError = true;
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
    },
  },
});

export const authReducer = authSlice.reducer;
