import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  registerUser,
  loginUser,
  logoutUser,
  fetchCurrentUser,
} from 'loginApi/loginApi';

export const register = createAsyncThunk(
  'user/register',
  async (data, { rejectWithValue }) => {
    try {
      const user = await registerUser(data);
      return user;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.data.message,
      };
      return rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
  'user/login',
  async (data, { rejectWithValue }) => {
    try {
      const user = await loginUser(data);
      return user;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.data.message,
      };
      return rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk(
  'user/logout',
  async (_, { rejectWithValue }) => {
    try {
      const result = await logoutUser();
      return result;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.data.message,
      };
      return rejectWithValue(error);
    }
  }
);

export const fetchCurrent = createAsyncThunk(
  'user/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const response = await fetchCurrentUser(auth.token);
      return response;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.data.message,
      };
      return rejectWithValue(error);
    }
  }
);
