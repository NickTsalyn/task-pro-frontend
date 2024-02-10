import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

import {
  register,
  login,
  refreshUser,
  logout,
  updateProfile,
  changeTheme
} from './operations';

const initialState = {
  user: { name: null, email: null, avatar: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  isError: false,
  errorMessage: null,
  theme: "light"
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
    },
    [logout.fulfilled](state) {
      state.isLoading = false;
      state.user = { name: null, email: null, avatar: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [logout.rejected](state, action) {
      state.isError = true;
      state.errorMessage = action.payload;
      toast.error(state.errorMessage);
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
    [updateProfile.pending](state) {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = null;
    },
    [updateProfile.fulfilled](state, action) {
      state.user = {...state.user, ...action.payload.user};
      state.isLoading = false;
    },
    [updateProfile.rejected](state, action) {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
      toast.error(state.errorMessage);
    },
    [changeTheme.fulfilled](state, action){//ЗМІНА ТЕМИ
      state.theme = action.payload.theme;      
    }
  },
});

export const authReducer = authSlice.reducer;
