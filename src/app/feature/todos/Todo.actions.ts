import { Todo } from './Todo.model';

export enum TodoAction {
  CREATE_TODO = 'todos/createTodo',
  REMOVE_TODO = 'todos/removeTodo',
  MARK_TODO_AS_COMPLETED = 'todos/markAsCompleted'
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
