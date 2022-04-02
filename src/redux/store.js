import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import { applyMiddleware } from 'redux';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth';
import { roomsReducer } from './rooms';

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
];

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token', 'isLoggedIn', 'verify'],
};
const roomsPersistConfig = {
    key: 'rooms',
    storage,
    whitelist: ['isOpen', 'currentMovie'],
};

export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        rooms: persistReducer(roomsPersistConfig, roomsReducer),
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
