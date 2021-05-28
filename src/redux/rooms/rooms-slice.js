import { createSlice } from '@reduxjs/toolkit';
import roomsOperations from './rooms-operations';

const initialState = {
    isOpen: false,
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
    },
});

export default roomSlice.reducer;
