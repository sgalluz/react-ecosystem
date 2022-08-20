import React from 'react';
import { ToastContainer } from 'react-toastify';
import './App.scss';
import TodoList from './feature/todos/TodoList';

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="app">
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
        />
        <TodoList />
      </div>
    );
  }
}
export default App;
