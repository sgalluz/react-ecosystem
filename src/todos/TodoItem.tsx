import React from 'react';
import { Todo } from './Todo.model';
import './TodoItem.scss';

type Props = {
    todo: Todo;
    onRemovePressed: (todo: Todo) => void;
}

class TodoItem extends React.Component<Props> {
    render(): React.ReactNode {
        const { todo } = this.props;
        return (
            <div className='todo-item-container' >
                <h4>{todo.text}</h4>
                <div className='button-container'>
                    <button
                        className='button success'
                        disabled={true}>Mark as Completed
                    </button>
                    <button
                        className='button danger'
                        onClick={() => this.props.onRemovePressed(todo)}>Remove
                    </button>
                </div>
            </div>
        );
    }
}

export default TodoItem;