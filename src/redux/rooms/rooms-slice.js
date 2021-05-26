import { createSlice } from '@reduxjs/toolkit';
import roomsOperations from './rooms-operations';

const initialState = {
    isOpen: false,
};

const roomSlice = createSlice({
    name: 'room',
    initialState,
    extraReducers: {
        [roomsOperations.create.fulfilled](state, _) {
            state.isOpen = true;
        },
        [roomsOperations.create.pending](state) {
            state.isOpen = undefined;
        },
        [roomsOperations.create.rejected](state) {
            state.isFetchingCurrentUser = false;
        },
    },
});

export default roomSlice.reducer;
