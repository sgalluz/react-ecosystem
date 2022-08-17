import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import store, { RootState } from "../store";
import todoReducer from "./reducers";
import { Todo } from "./Todo.model";

export type TodoState = { todos: Array<Todo> };

const initialState: TodoState = { todos: [] };

const slice = createSlice({
    name: 'todos',
    initialState,
    reducers: todoReducer
});

export default slice.reducer;

export const todosSelector = (state: RootState) => state.todos;