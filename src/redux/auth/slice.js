import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

import {
  register,
  login,
  refreshUser,
  logout,
  updateAvatar,
  forgetPassword,
  changeTheme,
  changePassword,
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
const handlePending = state => {
  state.isLoading = true;
  state.isError = false;
  state.errorMessage = null;
};
const handleRejected = state => {
  state.isLoading = false;
  state.isError = true;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending](state) {
      handlePending(state);
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
      handlePending(state);
    },
    [login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoading = false;
      state.isLoggedIn = true;
    },
    [login.rejected](state, action) {
      state.errorMessage = action.payload;
      toast.error(state.errorMessage);
      handleRejected(state);
    },
    [logout.pending](state) {
      handlePending(state);
    },
    [logout.fulfilled](state) {
      state.isLoading = false;
      state.user = { name: null, email: null, avatar: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [logout.rejected](state, action) {
      handleRejected(state);
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
      state.isLoggedIn = true;
      handlePending(state);
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
      handleRejected(state);
    },
    [updateAvatar.pending](state) {
      handlePending(state);
    },
    [updateAvatar.fulfilled](state, action) {
      state.user.avatar = action.payload.avatar;
      state.isLoading = false;
    },
    [updateAvatar.rejected](state, action) {
      handleRejected(state);
      state.errorMessage = action.payload;
      toast.error(state.errorMessage);
    },
    [forgetPassword.pending](state) {
      handlePending(state);
    },
    [forgetPassword.fulfilled](state) {
      state.isLoading = false;
    },
    [forgetPassword.rejected](state, action) {
      handleRejected(state);
      state.errorMessage = action.payload;
    },
    [changePassword.pending](state) {
      handlePending(state);
    },
    [changePassword.fulfilled](state) {
      state.isLoading = false;
    },
    [changePassword.rejected](state, action) {
      handleRejected(state);
      state.errorMessage = action.payload;
    },
    [changeTheme.fulfilled](state, action) {
      //ЗМІНА ТЕМИ
      state.theme = action.payload.theme;
    },
  },
});

export const authReducer = authSlice.reducer;
