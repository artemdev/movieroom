import * as API from '../../services/api-auth';
import { createAsyncThunk } from '@reduxjs/toolkit';

const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await API.register(credentials);

      API.token.set(data.token);

      return data;
    } catch (error) {
      if (error.response.status === 400) {
        console.error('Account with this email is already exist!');
      }

      if (error.response.status === 500) {
        console.error('Server is currently unavailable!');
      }

      return rejectWithValue(error.message);
    }
  },
);

const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await API.logIn(credentials);

      API.token.set(data.token);

      return data;
    } catch (error) {
      if (error.response.status === 400) {
        console.error('There is no user with this email and password!');
      }

      return rejectWithValue(error.message);
    }
  },
);

const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await API.logOut();

      API.token.unset();
    } catch (error) {
      if (error.response.status === 401) {
        console.error('You are not authorized!');
      }

      if (error.response.status === 500) {
        console.error('Server is currently unavailable!');
      }

      return rejectWithValue(error.message);
    }
  },
);

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();

    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return rejectWithValue();
    }

    API.token.set(persistedToken);
    try {
      const { data } = await API.fetchCurrentUser();

      return data;
    } catch (error) {
      if (error.response.status === 401) {
        console.error('You are not authorized!');
      }

      return rejectWithValue(error.message);
    }
  },
);

const operations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};

export default operations;
