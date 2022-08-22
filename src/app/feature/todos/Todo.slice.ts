import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';
import { Todo } from './Todo.model';

export type TodoState = Array<Todo>;

const initialState: TodoState = [];

const reducers = {
  createTodo: (state: TodoState, action: PayloadAction<Todo>) => {
    const { payload } = action;
    return state.concat(payload);
  },
  removeTodo: (state: TodoState, action: PayloadAction<Todo>) => {
    const { payload } = action;
    return state.filter((todo: Todo) => todo.text != payload.text);
  },
  markAsCompleted: (state: TodoState, action: PayloadAction<Todo>) => {
    const { payload } = action;
    return state.map((todo: Todo) => todo.text === payload.text ? payload : todo);
  }
};

const slice = createSlice({
  name: 'todos',
  initialState,
  reducers
});

export default slice.reducer;

export const todosSelector = (state: RootState) => state.todos;
