import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { Todo } from "./Todo.model";

export type TodoState = { todos: Array<Todo> };

const initialState: TodoState = { todos: [] };

const todoReducers = {
    createTodo: (state: TodoState, action: PayloadAction<Todo>) => {
        const { payload } = action;
        return { ...state, todos: state.todos.concat(payload) };
    },
    removeTodo: (state: TodoState, action: PayloadAction<Todo>) => {
        const { payload } = action;
        return {
            ...state,
            todos: state.todos.filter((curr: Todo) => curr.text != payload.text)
        };
    }
}

const slice = createSlice({
    name: 'todos',
    initialState,
    reducers: todoReducers
});

export default slice.reducer;

export const todosSelector = (state: RootState) => state.todos;