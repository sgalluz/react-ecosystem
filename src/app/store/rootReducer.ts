import { combineReducers } from '@reduxjs/toolkit';
import todos from '../feature/todos/Todo.slice';

const reducers = { todos };

const rootReducer = combineReducers(reducers);

export default rootReducer;