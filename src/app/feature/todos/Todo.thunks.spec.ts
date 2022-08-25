import { Store } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { TodoAction } from './Todo.actions';
import { Todo } from './Todo.model';
import {
  addTodoRequest,
  loadTodos,
  markTodoAsCompleteRequest,
  removeTodoRequest
} from './Todo.thunks';

describe('Todo thunks', () => {
  const mockStore = configureMockStore([thunk]);
  let store: Store;

  beforeEach(() => {
    store = mockStore({
      todos: {
        isLoading: false,
        items: []
      }
    });
    jest.spyOn(store, 'dispatch');
  });

  describe('when try to fetch todos', () => {
    it('should dispatch successful actions when fetch goes right', async () => {
      const fakeTodos: Todo[] = [
        {
          id: '12345',
          text: 'test1',
          isCompleted: false
        }
      ];
      global.fetch = jest.fn(() => fetchSuccess(fakeTodos)) as jest.Mock;
      const expectedFirstAction = { type: TodoAction.LOAD_TODOS_IN_PROGRESS };
      const expectedSecondAction = { type: TodoAction.LOAD_TODOS_SUCCESS, payload: fakeTodos };

      await loadTodos()(store.dispatch);

      expect(store.dispatch).toHaveBeenCalledTimes(2);
      expect(store.dispatch).toHaveBeenCalledWith(expectedFirstAction);
      expect(store.dispatch).toHaveBeenCalledWith(expectedSecondAction);
    });

    it('should dispatch failure actions when fetch fails', async () => {
      jest.spyOn(toast, 'error');
      global.fetch = jest.fn(fetchError) as jest.Mock;
      const expectedFirstAction = { type: TodoAction.LOAD_TODOS_IN_PROGRESS };
      const expectedSecondAction = { type: TodoAction.LOAD_TODOS_FAILURE };

      await loadTodos()(store.dispatch);

      expect(store.dispatch).toHaveBeenCalledTimes(2);
      expect(store.dispatch).toHaveBeenCalledWith(expectedFirstAction);
      expect(store.dispatch).toHaveBeenCalledWith(expectedSecondAction);
      expect(toast.error).toHaveBeenCalled();
    });
  });

  describe('when try to add todos', () => {
    it('should dispatch successful actions when fetch goes right', async () => {
      jest.spyOn(toast, 'success');
      const fakeTodo: Todo = {
        id: '12345',
        text: 'test1',
        isCompleted: false
      };
      global.fetch = jest.fn(() => fetchSuccess(fakeTodo)) as jest.Mock;
      const expectedFirstAction = { type: TodoAction.CREATE_TODO, payload: fakeTodo };

      await addTodoRequest('test')(store.dispatch);

      expect(store.dispatch).toHaveBeenCalledWith(expectedFirstAction);
      expect(toast.success).toHaveBeenCalled();
    });

    it('should dispatch failure actions when fetch fails', async () => {
      jest.spyOn(toast, 'error');
      global.fetch = jest.fn(fetchError) as jest.Mock;

      await addTodoRequest('test')(store.dispatch);

      expect(store.dispatch).not.toHaveBeenCalled();
      expect(toast.error).toHaveBeenCalled();
    });
  });

  describe('when try to remove todos', () => {
    it('should dispatch successful actions when fetch goes right', async () => {
      jest.spyOn(toast, 'success');
      const fakeTodo: Todo = {
        id: '12345',
        text: 'test1',
        isCompleted: false
      };
      global.fetch = jest.fn(() => fetchSuccess(fakeTodo)) as jest.Mock;
      const expectedFirstAction = { type: TodoAction.REMOVE_TODO, payload: fakeTodo };

      await removeTodoRequest('12345')(store.dispatch);

      expect(store.dispatch).toHaveBeenCalledWith(expectedFirstAction);
      expect(toast.success).toHaveBeenCalled();
    });

    it('should dispatch failure actions when fetch fails', async () => {
      jest.spyOn(toast, 'error');
      global.fetch = jest.fn(fetchError) as jest.Mock;

      await removeTodoRequest('12345')(store.dispatch);

      expect(store.dispatch).not.toHaveBeenCalled();
      expect(toast.error).toHaveBeenCalled();
    });
  });

  describe('when try to mark a todo as completed', () => {
    it('should dispatch successful actions when fetch goes right', async () => {
      jest.spyOn(toast, 'success');
      const fakeTodo: Todo = {
        id: '12345',
        text: 'test1',
        isCompleted: false
      };
      global.fetch = jest.fn(() => fetchSuccess(fakeTodo)) as jest.Mock;
      const expectedFirstAction = { type: TodoAction.MARK_TODO_AS_COMPLETED, payload: fakeTodo };

      await markTodoAsCompleteRequest('12345')(store.dispatch);

      expect(store.dispatch).toHaveBeenCalledWith(expectedFirstAction);
      expect(toast.success).toHaveBeenCalled();
    });

    it('should dispatch failure actions when fetch fails', async () => {
      jest.spyOn(toast, 'error');
      global.fetch = jest.fn(fetchError) as jest.Mock;

      await markTodoAsCompleteRequest('12345')(store.dispatch);

      expect(store.dispatch).not.toHaveBeenCalled();
      expect(toast.error).toHaveBeenCalled();
    });
  });

  const fetchSuccess = (data: any) => Promise.resolve({ json: () => Promise.resolve(data) });
  const fetchError = () => Promise.reject(new Error('Unable to fetch url'));
});
