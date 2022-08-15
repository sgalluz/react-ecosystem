import React from 'react';
import { Todo } from './Todo.model';
import './TodoList.scss';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

type TodoListProps = {
    todos: Array<Todo>
}

class TodoList extends React.Component<TodoListProps> {
    render(): React.ReactNode {
        const { todos } = this.props;
        return (
            <div className='list-wrapper'>
                <TodoForm />
                {(todos).map((todo, i) => <TodoItem key={i} todo={todo}/>)}
            </div>
        );
    }
}

export default TodoList;