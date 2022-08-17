import React from 'react';
import './App.scss';
import TodoList from './todos/TodoList';

class App extends React.Component {
    render(): React.ReactNode {
        return (
            <div className='app' >
                <TodoList />
            </div>
        );
    }
}
;

export default App;