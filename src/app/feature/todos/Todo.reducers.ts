import { PayloadAction } from '@reduxjs/toolkit';
import { Todo } from './Todo.model';
import { TodoState } from './Todo.slice';

export const createTodo = (state: TodoState, action: PayloadAction<Todo>) => {
  const { payload } = action;
  return { ...state, items: state.items.concat(payload) };
};

export const removeTodo = (state: TodoState, action: PayloadAction<Todo>) => {
  const { payload } = action;
  return { ...state, items: state.items.filter((todo: Todo) => todo.id != payload.id) };
};

export const markAsCompleted = (state: TodoState, action: PayloadAction<Todo>) => {
  const { payload } = action;
  return {
    ...state,
    items: state.items.map((todo: Todo) => (todo.id === payload.id ? payload : todo))
  };
};

export const loadTodosInProgress = (state: TodoState) => ({ ...state, isLoading: true });

export const loadTodosSuccess = (_: TodoState, action: PayloadAction<Todo[]>) => {
  const { payload } = action;
  return { items: payload, isLoading: false };
};

export const loadTodosFailure = (state: TodoState) => ({ ...state, isLoading: false });
