import React from 'react';
import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';
import TodoListWrapper from './feature/todos/TodoListWrapper';
import './App.scss';

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
  color: #222222;
`;

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <AppContainer>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
        />
        <TodoListWrapper />
      </AppContainer>
    );
  }
}
export default App;
