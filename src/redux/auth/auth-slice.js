import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isFetchingCurrentUser: false,
    error: null,
    verify: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [authOperations.register.fulfilled](state, { payload }) {
            state.user = {
                name: payload.data.name,
                email: payload.data.email,
            };
            state.avatar = payload.data.avatar;
            // state.token = action.payload.token;

            state.isLoggedIn = true;
        },
        [authOperations.register.rejected](state, { payload }) {
            state.error = payload;
        },
        [authOperations.logIn.fulfilled](state, { payload }) {
            // state.user = payload.data.user;
            state.user = {
                name: payload.name,
                email: payload.email,
            };
            state.token = payload.token;
            state.verify = payload.verify;
            state.isLoggedIn = true;
        },
        [authOperations.logIn.rejected](state, action) {
            state.error = action.payload;
        },

        [authOperations.logOut.fulfilled](state) {
            console.log('state>>>>', state);
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
            state.verify = false;
        },
        [authOperations.logOut.rejected](state, action) {
            state.error = action.payload;
        },
        [authOperations.fetchCurrentUser.pending](state) {
            state.isFetchingCurrentUser = true;
        },
        [authOperations.fetchCurrentUser.fulfilled](state, action) {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isFetchingCurrentUser = false;
        },
        [authOperations.fetchCurrentUser.rejected](state, action) {
            state.isFetchingCurrentUser = false;
            // state.isLoggedIn = false;
            state.error = action.payload;
        },
    },
});

export default authSlice.reducer;
