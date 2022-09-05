import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';

import playerReducer from "../features/playerSlice";
import categoriesReducer from "../features/categoriesSlice";

const reducers = combineReducers({
    player: playerReducer,
    categories: categoriesReducer
})

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer
})

