import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { token } from '../../services/api-auth';
import { CREATE_ROOM_URL } from '../../helpers/routes';
import * as API from '../../services/rooms-api';

const create = createAsyncThunk(
    'rooms/create',
    async (movies, { rejectWithValue, getState }) => {
        const state = getState();

        const persistedToken = state.auth.token;
        token.set(persistedToken);

        if (persistedToken === null) {
            return rejectWithValue();
        }

        try {
            const { data } = await axios.post(CREATE_ROOM_URL, { movies });
            return data;
        } catch (error) {
            if (error.response.status === 401) {
                console.error('You are not authorized!');
            }

            return rejectWithValue(error.message);
        }
    },
);
const exit = createAsyncThunk(
    'rooms/exit',
    async (_, { rejectWithValue, getState }) => {
        return true;
    },
);

const getMoviesInRoom = createAsyncThunk(
    'rooms/getMoviesInRoom',
    async (roomId, { rejectWithValue, _getState }) => {
        const options = {
            roomId,
        };
        try {
            const { data } = await axios.get(`/rooms`, options);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },
);

const operations = {
    create,
    getMoviesInRoom,
    exit,
};

export default operations;
