import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';
import { Todo } from './Todo.model';

export type TodoState = {
  items: Array<Todo>;
  isLoading: boolean;
};

const initialState: TodoState = { items: [], isLoading: false };

const reducers = {
  createTodo: (state: TodoState, action: PayloadAction<Todo>) => {
    const { payload } = action;
    return { ...state, items: state.items.concat(payload) };
  },
  removeTodo: (state: TodoState, action: PayloadAction<Todo>) => {
    const { payload } = action;
    return { ...state, items: state.items.filter((todo: Todo) => todo.id != payload.id) };
  },
  markAsCompleted: (state: TodoState, action: PayloadAction<Todo>) => {
    const { payload } = action;
    return {
      ...state,
      items: state.items.map((todo: Todo) => (todo.id === payload.id ? payload : todo))
    };
  },
  loadTodosInProgress: (state: TodoState) => ({ ...state, isLoading: true }),
  loadTodosSuccess: (_: TodoState, action: PayloadAction<Todo[]>) => {
    const { payload } = action;
    return { items: payload, isLoading: false };
  },
  loadTodosFailure: (state: TodoState) => ({ ...state, isLoading: false })
};

const slice = createSlice({
  name: 'todos',
  initialState,
  reducers
});

export default slice.reducer;

export const todosSelector = (state: RootState) => state.todos.items;

export const todosLoadingSelector = (state: RootState) => state.todos.isLoading;
