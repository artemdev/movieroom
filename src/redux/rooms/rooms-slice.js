import { createSlice } from '@reduxjs/toolkit';
import roomsOperations from './rooms-operations';

const initialState = {
    isOpen: false,
    peopleVoted: 0,
    currentMovie: {
        isLoading: false,
    },
    results: {},
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
        [roomsOperations.close.fulfilled](state, _) {
            state.isOpen = false;
        },
        [roomsOperations.voteLike.pending](state, _action) {
            state.currentMovie.isLoading = true;
        },
        [roomsOperations.voteDislike.pending](state, _action) {
            state.currentMovie.isLoading = true;
        },
        [roomsOperations.voteLike.fulfilled](state, action) {
            state.currentMovie = action.payload;
            state.currentMovie.isLoading = false;
        },
        [roomsOperations.voteDislike.fulfilled](state, action) {
            state.currentMovie = action.payload || {};
            state.currentMovie.isLoading = false;
        },
        [roomsOperations.voteDislike.rejected](state, _action) {
            state.currentMovie.isLoading = false;
        },
        [roomsOperations.voteLike.rejected](state, _action) {
            state.currentMovie.isLoading = false;
        },
        [roomsOperations.getMovieInRoom.fulfilled](state, action) {
            state.currentMovie = action.payload || {};
            state.currentMovie.isLoading = false;
        },
        [roomsOperations.getResultsInRoom.fulfilled](state, action) {
            const { results, numberOfPeopleVoted } = action.payload;
            state.results = results;
            state.totalVoted = numberOfPeopleVoted;
        },
    },
});

export default roomSlice.reducer;
