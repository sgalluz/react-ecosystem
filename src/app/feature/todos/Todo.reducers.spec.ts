import { TodoAction } from './Todo.actions';
import { Todo } from './Todo.model';
import {
  createTodo,
  loadTodosFailure,
  loadTodosInProgress,
  loadTodosSuccess,
  markAsCompleted,
  removeTodo
} from './Todo.reducers';
import { TodoState } from './Todo.slice';

describe('Todo reducers', () => {
  describe('when createTodo action is received', () => {
    it('should add a new todo', () => {
      const todo: Todo = { text: 'test', isCompleted: false, id: '12345' };
      const action = { type: TodoAction.CREATE_TODO, payload: todo };
      const state: TodoState = { isLoading: false, items: [] };

      const actual: TodoState = createTodo(state, action);

      expect(actual).toBeDefined();
      expect(actual.isLoading).toBeFalsy();
      expect(actual.items).toContainEqual(todo);
    });
  });

  describe('when removeTodo action is received', () => {
    it('should remove the existing todo', () => {
      const todo: Todo = { text: 'test', isCompleted: false, id: '12345' };
      const action = { type: TodoAction.REMOVE_TODO, payload: todo };
      const state: TodoState = { isLoading: false, items: [todo] };

      const actual: TodoState = removeTodo(state, action);

      expect(actual).toBeDefined();
      expect(actual.isLoading).toBeFalsy();
      expect(actual.items.length).toEqual(0);
    });

    it('should do nothing if todo does not exist', () => {
      const todo: Todo = { text: 'test', isCompleted: false, id: '12345' };
      const toRemove: Todo = { text: 'test2', isCompleted: true, id: '67890' };
      const action = { type: TodoAction.REMOVE_TODO, payload: toRemove };
      const state: TodoState = { isLoading: false, items: [todo] };

      const actual: TodoState = removeTodo(state, action);

      expect(actual).toBeDefined();
      expect(actual.isLoading).toBeFalsy();
      expect(actual.items).toContainEqual(todo);
    });
  });

  describe('when markAsCompleted action is received', () => {
    it('should set isCompleted flag to true', () => {
      const todo: Todo = { text: 'test', isCompleted: false, id: '12345' };
      const another: Todo = { text: 'test2', isCompleted: true, id: '67890' };
      const completed: Todo = { text: 'test', isCompleted: true, id: '12345' };
      const action = { type: TodoAction.MARK_TODO_AS_COMPLETED, payload: completed };
      const state: TodoState = { isLoading: false, items: [todo, another] };

      const actual: TodoState = markAsCompleted(state, action);

      expect(actual).toBeDefined();
      expect(actual.isLoading).toBeFalsy();
      expect(actual.items.length).toEqual(2);
      expect(actual.items).toContainEqual(completed);
    });
  });

  describe('when loadTodosInProgress action is received', () => {
    it('should set isLoading flag to true', () => {
      const state: TodoState = { isLoading: false, items: [] };

      const actual: TodoState = loadTodosInProgress(state);

      expect(actual).toBeDefined();
      expect(actual.isLoading).toBeTruthy();
    });
  });

  describe('when loadTodosInProgress action is received', () => {
    it('should set isLoading flag to false', () => {
      const state: TodoState = { isLoading: true, items: [] };

      const actual: TodoState = loadTodosFailure(state);

      expect(actual).toBeDefined();
      expect(actual.isLoading).toBeFalsy();
    });
  });

  describe('when loadTodosInProgress action is received', () => {
    it('should set isLoading flag to false', () => {
      const todo: Todo = { text: 'test', isCompleted: false, id: '12345' };
      const action = { type: TodoAction.LOAD_TODOS_SUCCESS, payload: [todo] };
      const state: TodoState = { isLoading: true, items: [] };

      const actual: TodoState = loadTodosSuccess(state, action);

      expect(actual).toBeDefined();
      expect(actual.isLoading).toBeFalsy();
      expect(actual.items).toContainEqual(todo);
    });
  });
});
