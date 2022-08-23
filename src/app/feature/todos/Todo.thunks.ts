import { toast } from 'react-toastify';
import {
  createTodo,
  loadTodosFailure,
  loadTodosInProgress,
  loadTodosSuccess,
  markAsCompleted,
  removeTodo
} from './Todo.actions';
import { Todo } from './Todo.model';
import { TodoState } from './Todo.slice';

export const loadTodos = () => async (dispatch: any) => {
  try {
    dispatch(loadTodosInProgress());
    // const response = await fetch('/todos-delay');
    const response = await fetch('/todos');
    const todos: Todo[] = await response.json();
    dispatch(loadTodosSuccess(todos));
  } catch (error) {
    dispatch(loadTodosFailure());
    toast.error('Unable to fetch updated todo list');
  }
};

export const addTodoRequest = (text: string) => async (dispatch: any) => {
  try {
    const body = JSON.stringify({ text });
    const response = await fetch('/todos', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body
    });
    const addedTodo: Todo = await response.json();
    dispatch(createTodo(addedTodo));
  } catch (error) {
    toast.error('Unable to create new todo');
  }
};

export const removeTodoRequest = (id: string) => async (dispatch: any) => {
  try {
    const response = await fetch(`/todos/${id}`, {
      method: 'DELETE'
    });
    const removedTodo: Todo = await response.json();
    dispatch(removeTodo(removedTodo));
  } catch (error) {
    toast.error('Unable to remove todo');
  }
};

export const markTodoAsCompleteRequest = (id: string) => async (dispatch: any) => {
  try {
    const response = await fetch(`/todos/${id}/completed`, {
      method: 'POST'
    });
    const updatedTodo: Todo = await response.json();
    dispatch(markAsCompleted(updatedTodo));
  } catch (error) {
    toast.error('Unable to remove todo');
  }
};
