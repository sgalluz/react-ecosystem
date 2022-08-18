import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import todoReducers from "./reducers";
import { Todo } from "./Todo.model";

export type TodoState = { todos: Array<Todo> };

const initialState: TodoState = { todos: [] };

const slice = createSlice({
    name: 'todos',
    initialState,
    reducers: todoReducers
});

export default slice.reducer;

export const todosSelector = (state: RootState) => state.todos;