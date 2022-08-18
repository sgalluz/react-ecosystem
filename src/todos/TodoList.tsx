import React from 'react';
import { Todo } from './Todo.model';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { removeTodo } from './actions';
import { connect } from 'react-redux';
import store from '../store';
import { Dispatch } from '@reduxjs/toolkit';
import { TodoState } from './slice';

type Props = {
    todos: Array<Todo>;
    onRemovePressed: (todo: Todo) => void;
}

const mapState = (state: TodoState) => ({ todos: state.todos });
   
const mapDispatch = (dispatch: Dispatch) => ({
    onRemovePressed: (todo: Todo) => dispatch(removeTodo(todo))
});

const connector = connect(mapState, mapDispatch);

class TodoList extends React.Component<Props> {    
    render(): React.ReactNode {
        const { todos } = store.getState().todos;
        return (
            <div className='list-wrapper'>
                <h2>Todo list</h2>
                <TodoForm />
                <h2>To be completed</h2>
                {todos.map((todo, i) => <TodoItem
                    key={i}
                    todo={todo}
                    onRemovePressed={this.props.onRemovePressed}
                    />)}
            </div>
        );
    }
}

export default connector(TodoList);