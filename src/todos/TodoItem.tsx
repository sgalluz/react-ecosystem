import React from 'react';
import { Todo } from './Todo.model';
import './TodoItem.scss';

type TodoItemProps = {
    todo: Todo;
}

class TodoItem extends React.Component<TodoItemProps> {
    render(): React.ReactNode {
        const { todo } = this.props;
        return (
            <div className='todo-item-container' >
                <h3>{todo.text}</h3>
                <div className='button-container'>
                    <button className='button success'>Mark as Completed</button>
                    <button className='button danger'>Remove</button>
                </div>
            </div>
        );
    }
}

export default TodoItem;