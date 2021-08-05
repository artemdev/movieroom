import * as API from '../../services/api-auth';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import axios from 'axios';

const register = createAsyncThunk(
    'auth/register',
    async (credentials, { rejectWithValue }) => {
        try {
            const { data } = await API.register(credentials);
            API.token.set(data.token);
            toast.info(
                'Вы зарегистрированы! Для активации аккаунта перейдите по ссылке в письме, на указаной Вами почте.',
            );
            toast.info(
                'Are you registered! To activate your account, follow the link in the letter on the mail you specified.',
            );

            return data;
        } catch (error) {
            if (error.response.status === 409) {
                toast.error('Account with this email is already exist!');
            }
            if (error.response.status === 400) {
                console.error('Account with this email is already exist!');
                toast.error('Account with this email is already exist!');
            }

            if (error.response.status === 500) {
                console.error('Server is currently unavailable!');
                toast.error('Server is currently unavailable!');
            }
            toast.error(error.message);
            return rejectWithValue(error.message);
        }
    },
);

const logIn = createAsyncThunk(
    'auth/login',
    async (credentials, { rejectWithValue }) => {
        try {
            const {
                data: { data },
            } = await axios.post('/auth/login', credentials);

            API.token.set(data.token);

            return data;
        } catch (error) {
            if (error.response.status === 400) {
                toast.error('There is no user with this email and password!');
                console.error('There is no user with this email and password!');
            }
            toast.error('There is no user with this email and password!');
            return rejectWithValue(error.message);
        }
    },
);

const logOut = createAsyncThunk(
    'auth/logout',
    async (token, { rejectWithValue }) => {
        try {
            await axios.post('/auth/logout', token);
            console.log('Log out with token', token);
            API.token.unset();
        } catch (error) {
            if (error.response.status === 401) {
                toast.error('You are not authorized!');
                console.error('You are not authorized!');
            }

            if (error.response.status === 500) {
                toast.error('Server is currently unavailable!');
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
            const { data } = await API.fetchCurrentUser(persistedToken);

            return data;
        } catch (error) {
            if (error.response.status === 401) {
                toast.error('You are not authorized!');
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
