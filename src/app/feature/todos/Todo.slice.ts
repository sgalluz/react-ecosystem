import { createSlice, ValidateSliceCaseReducers } from '@reduxjs/toolkit';
import { Todo } from './Todo.model';
import {
  createTodo,
  loadTodosFailure,
  loadTodosInProgress,
  loadTodosSuccess,
  markAsCompleted,
  removeTodo
} from './Todo.reducers';

export type TodoState = {
  items: Array<Todo>;
  isLoading: boolean;
};

const initialState: TodoState = { items: [], isLoading: false };

const reducers: ValidateSliceCaseReducers<TodoState, any> = {
  createTodo,
  removeTodo,
  markAsCompleted,
  loadTodosInProgress,
  loadTodosSuccess,
  loadTodosFailure
};

const slice = createSlice({
  name: 'todos',
  initialState,
  reducers
});

export default slice.reducer;
