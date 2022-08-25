import { RootState } from '../../store/store';
import { Todo } from './Todo.model';
import { getTodos, getTodosLoading, getCompletedTodos, getIncompleteTodos } from './Todo.selectors';

describe('Todo selectors', () => {
  let fakeState: RootState;
  let items: Array<Todo>;

  beforeAll(() => {
    const toCompleteTodo: Todo = { text: 'test', isCompleted: false, id: '12345' };
    const completedTodo: Todo = { text: 'test2', isCompleted: true, id: '67890' };
    items = [toCompleteTodo, completedTodo];
    fakeState = { todos: { isLoading: false, items } };
  });

  describe('when invoking getTodos selector', () => {
    it('should return list of items', () => {
      const expected = items;

      const actual = getTodos(fakeState);

      expect(actual).toEqual(expected);
    });
  });

  describe('when invoking getTodosLoading selector', () => {
    it('should return the value of isLoading flag', () => {
      const actual = getTodosLoading(fakeState);

      expect(actual).toBeFalsy();
    });
  });

  describe('when invoking getCompletedTodos selector', () => {
    it('should return only completed todos', () => {
      const actual = getCompletedTodos.resultFunc(items);

      expect(actual.length).toBe(1);
      expect(actual).toEqual([items[1]]);
    });
  });

  describe('when invoking getIncompleteTodos selector', () => {
    it('should return only incomplete todos', () => {
      const actual = getIncompleteTodos.resultFunc(items);

      expect(actual.length).toBe(1);
      expect(actual).toEqual([items[0]]);
    });
  });
});
