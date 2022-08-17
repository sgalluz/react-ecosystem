import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todos from './todos/slice';

const reducers = { todos };

const rootReducers = combineReducers(reducers);

const store = configureStore({reducer: rootReducers});

export type RootState = ReturnType<typeof store.getState>;

export default store;