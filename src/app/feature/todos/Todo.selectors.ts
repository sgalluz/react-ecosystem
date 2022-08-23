import { createSelector } from 'reselect';
import { RootState } from '../../store/store';
import { Todo } from './Todo.model';

export const getTodos = (state: RootState) => state.todos.items;
export const getTodosLoading = (state: RootState) => state.todos.isLoading;

export const getIncompleteTodos = createSelector(getTodos, (todos: Todo[]) =>
  todos.filter((todo: Todo) => !todo.isCompleted)
);

export const getCompletedTodos = createSelector(getTodos, (todos: Todo[]) =>
  todos.filter((todo: Todo) => todo.isCompleted)
);
