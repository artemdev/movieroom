import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from '../../services/rooms-api';
import axios from 'axios';
import { token } from '../../services/api-auth';
import { CREATE_ROOM_URL } from '../../helpers/routes';

const create = createAsyncThunk(
    'rooms/create',
    async (movies, { rejectWithValue, getState }) => {
        console.log('token is', null);

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

const operations = {
    create,
};

export default operations;
