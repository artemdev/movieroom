import { createSlice } from '@reduxjs/toolkit';
import roomsOperations from './rooms-operations';

const initialState = {
    isOpen: false,
    currentMovie: null,
};

const roomSlice = createSlice({
    name: 'room',
    initialState,
    extraReducers: {
        [roomsOperations.create.fulfilled](state, action) {
            state.isOpen = action.payload._id;
        },
        [roomsOperations.create.pending](state, _) {
            state.isOpen = undefined;
        },
        [roomsOperations.create.rejected](state, _) {
            state.isOpen = false;
        },
        [roomsOperations.exit.fulfilled](state, _) {
            state.isOpen = false;
        },
        [roomsOperations.getMoviesInRoom.fulfilled](state, action) {
            state.currentMovie = action.payload;
        },
        [roomsOperations.voteLike.fulfilled](state, action) {
            state.currentMovie = action.payload;
        },
        [roomsOperations.voteDislike.fulfilled](state, action) {
            state.currentMovie = action.payload;
        },
    },
});

export default roomSlice.reducer;
