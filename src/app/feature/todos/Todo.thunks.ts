import { toast } from 'react-toastify';
import { loadTodosFailure, loadTodosInProgress, loadTodosSuccess } from './Todo.actions';
import { Todo } from './Todo.model';
import { TodoState } from './Todo.slice';

export const loadTodos = () => async (dispatch: any, _: TodoState) => {
    try {
      dispatch(loadTodosInProgress());
      const response = await fetch('/todos');
      const todos: Todo[] = await response.json();
      dispatch(loadTodosSuccess(todos));  
    } catch (error) {
      dispatch(loadTodosFailure());
      toast.error('Unable to fetch updated todo list');
    }
  };
