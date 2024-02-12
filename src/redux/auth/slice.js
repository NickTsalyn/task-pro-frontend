import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

import {
  register,
  login,
  refreshUser,
  logout,
  updateAvatar,
  forgetPassword,
  changePassword,
  changeTheme,
} from './operations';

const initialState = {
  user: { name: null, email: null, avatar: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  isError: false,
  errorMessage: null,
  theme: 'light',
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
    [register.fulfilled](state, { payload }) {
      console.log(payload);
      state.user = payload.user;
      state.token = payload.token;
      state.isLoading = false;
      state.isLoggedIn = true;
    },
    [register.rejected](state, action) {
      state.isLoading = false;
      const errorMessage = action.payload;
      if (errorMessage === 'Email in use') {
        state.errorMessage = errorMessage;
        toast.error(state.errorMessage);
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
      toast.error(state.errorMessage);
      state.isError = true;
    },
    [logout.pending](state) {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = null;
    },
    [logout.fulfilled](state) {
      state.isLoading = false;
      state.user = { name: null, email: null, avatar: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [logout.rejected](state, action) {
      state.isError = true;
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
      state.isError = false;
      state.errorMessage = null;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
    },
    [updateAvatar.pending](state) {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = null;
    },
    [updateAvatar.fulfilled](state, action) {
      state.user.avatar = action.payload.avatar;
      state.isLoading = false;
    },
    [updateAvatar.rejected](state, action) {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
      toast.error(state.errorMessage);
    },
    [forgetPassword.pending](state) {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = null;
    },
    [forgetPassword.fulfilled](state) {
      state.isLoading = false;
    },
    [forgetPassword.rejected](state, action) {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    },
    [changePassword.pending](state) {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = null;
    },
    [changePassword.fulfilled](state) {
      state.isLoading = false;
    },
    [changePassword.rejected](state, action) {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    },
    [changeTheme.fulfilled](state, action) {
      //ЗМІНА ТЕМИ
      state.theme = action.payload.theme;
    },
  },
});

export const authReducer = authSlice.reducer;
