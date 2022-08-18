import { PayloadAction } from "@reduxjs/toolkit";
import { TodoState } from "./slice";
import { Todo } from "./Todo.model";

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

export default todoReducers;