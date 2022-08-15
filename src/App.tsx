import React from 'react';
import './App.scss';
import { Todo } from './todos/Todo.model';
import TodoList from './todos/TodoList';

class App extends React.Component {
    render(): React.ReactNode {
        const todos: Todo[] = [
            { text: 'Hello' }
        ];
        return (
            <div className='app' >
                <TodoList todos={todos}/>
            </div>
        );
    }
}
;

export default App;