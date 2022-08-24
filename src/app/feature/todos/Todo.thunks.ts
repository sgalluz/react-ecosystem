import { Action } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { ThunkDispatch } from 'redux-thunk';
import { HttpClient } from '../../services/HttpClient';
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

const httpClient: HttpClient = new HttpClient();

export const loadTodos = () => async (dispatch: ThunkDispatch<TodoState, void, Action>) => {
  try {
    dispatch(loadTodosInProgress());
    const todos: Todo[] = await httpClient.get('/todos');
    dispatch(loadTodosSuccess(todos));
  } catch (error) {
    dispatch(loadTodosFailure());
    toast.error('Unable to fetch updated todo list');
  }
};

export const addTodoRequest =
  (text: string) => async (dispatch: ThunkDispatch<TodoState, void, Action>) => {
    try {
      const addedTodo: Todo = await httpClient.post('/todos', { text });
      dispatch(createTodo(addedTodo));
      toast.success('New todo created!');
    } catch (error) {
      toast.error('Unable to create new todo');
    }
  };

export const removeTodoRequest =
  (id: string) => async (dispatch: ThunkDispatch<TodoState, void, Action>) => {
    try {
      const removedTodo: Todo = await httpClient.delete(`/todos/${id}`);
      dispatch(removeTodo(removedTodo));
      toast.success('Todo removed!');
    } catch (error) {
      toast.error('Unable to remove todo');
    }
  };

export const markTodoAsCompleteRequest =
  (id: string) => async (dispatch: ThunkDispatch<TodoState, void, Action>) => {
    try {
      const updatedTodo: Todo = await httpClient.post(`/todos/${id}/completed`);
      dispatch(markAsCompleted(updatedTodo));
      toast.success('Todo completed!');
    } catch (error) {
      toast.error('Unable to remove todo');
    }
  };
