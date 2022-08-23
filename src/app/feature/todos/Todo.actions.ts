import { Todo } from './Todo.model';

export enum TodoAction {
  CREATE_TODO = 'todos/createTodo',
  REMOVE_TODO = 'todos/removeTodo',
  MARK_TODO_AS_COMPLETED = 'todos/markAsCompleted',
  LOAD_TODOS_IN_PROGRESS = 'todos/loadTodosInProgress',
  LOAD_TODOS_SUCCESS = 'todos/loadTodosSuccess',
  LOAD_TODOS_FAILURE = 'todos/loadTodosFailure'
}

export const createTodo = (todo: Todo) => ({
  type: TodoAction.CREATE_TODO,
  payload: todo
});

export const removeTodo = (todo: Todo) => ({
  type: TodoAction.REMOVE_TODO,
  payload: todo
});

export const markAsCompleted = (todo: Todo) => ({
  type: TodoAction.MARK_TODO_AS_COMPLETED,
  payload: todo
});

export const loadTodosInProgress = () => ({
  type: TodoAction.LOAD_TODOS_IN_PROGRESS
});

export const loadTodosSuccess = (todos: Todo[]) => ({
  type: TodoAction.LOAD_TODOS_SUCCESS,
  payload: todos
});

export const loadTodosFailure = () => ({
  type: TodoAction.LOAD_TODOS_FAILURE
});
