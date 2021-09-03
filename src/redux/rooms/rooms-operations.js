import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { token } from '../../services/api-auth';
import { CREATE_ROOM_URL } from '../../helpers/routes';
// import * as API from '../../services/rooms-api';

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
const close = createAsyncThunk(
    'rooms/close',
    async (_, { rejectWithValue, getState }) => {
        return true;
    },
);

const getMovieInRoom = createAsyncThunk(
    'rooms/getMovieInRoom',
    async (roomId, { rejectWithValue, _getState }) => {
        const options = {
            params: {
                roomId,
            },
        };

        try {
            const { data } = await axios.get(`/votes`, options);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },
);

const voteLike = createAsyncThunk(
    'rooms/voteLike',
    async ({ roomId, movieId }, { rejectWithValue, getState }) => {
        const state = getState();

        const persistedToken = state.auth.token;
        token.set(persistedToken);

        if (persistedToken === null) {
            return rejectWithValue();
        }

        const options = {
            body: {
                like: true,
                movieId,
                roomId,
            },
        };

        try {
            const { data } = await axios.post(`/votes`, options);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },
);

const voteDislike = createAsyncThunk(
    'rooms/voteDislike',
    async ({ roomId, movieId }, { rejectWithValue, getState }) => {
        const state = getState();

        const persistedToken = state.auth.token;
        token.set(persistedToken);

        if (persistedToken === null) {
            return rejectWithValue();
        }
        const options = {
            like: false,
            movieId,
            roomId,
        };
        try {
            const { data } = await axios.post(`/votes`, options);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },
);

const operations = {
    create,
    getMovieInRoom,
    close,
    voteDislike,
    voteLike,
};

export default operations;
