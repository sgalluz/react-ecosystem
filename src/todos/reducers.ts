import { PayloadAction } from "@reduxjs/toolkit";
import { TodoAction } from "./actions";
import { TodoState } from "./slice";
import { Todo } from "./Todo.model";

/*
const todoReducer = (state: TodoState, action: PayloadAction<Todo, TodoAction>) => {
    console.log('todo reducers', state, action);
    const { type, payload } = action;

    switch (type) {
        case TodoAction.CREATE_TODO: return { ...state, todos: state.todos.concat(payload) };
        case TodoAction.REMOVE_TODO: 
            return {
                ...state,
                todos: state.todos.filter((curr: Todo) => curr.text != payload.text)
            };
    }
    return state;
}
*/

const todoReducer = {
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

export default todoReducer;