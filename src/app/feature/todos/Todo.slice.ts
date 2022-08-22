import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';
import { Todo } from './Todo.model';

export type TodoState = Array<Todo>;

const initialState: TodoState = [];

const todoReducers = {
  createTodo: (state: TodoState, action: PayloadAction<Todo>) => {
    const { payload } = action;
    return state.concat(payload);
  },
  removeTodo: (state: TodoState, action: PayloadAction<Todo>) => {
    const { payload } = action;
    return state.filter((curr: Todo) => curr.text != payload.text);
  }
};

const slice = createSlice({
  name: 'todos',
  initialState,
  reducers: todoReducers
});

export default slice.reducer;

export const todosSelector = (state: RootState) => state.todos;
