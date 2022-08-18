import { combineReducers } from '@reduxjs/toolkit';
import todos from './todos/slice';

const reducers = { todos };

const rootReducer = combineReducers(reducers);

export default rootReducer;