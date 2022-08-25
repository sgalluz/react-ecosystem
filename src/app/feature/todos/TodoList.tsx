import React, { useEffect } from 'react';
import { Todo } from './Todo.model';
import TodoForm from './TodoForm';
import Loader from '../../components/Loader';
import { connect } from 'react-redux';
import { getTodosLoading, getCompletedTodos, getIncompleteTodos } from './Todo.selectors';
import { loadTodos, removeTodoRequest, markTodoAsCompleteRequest } from './Todo.thunks';
import { FaTasks } from 'react-icons/fa';
import { TodoState } from './Todo.slice';
import styled from 'styled-components';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from '@reduxjs/toolkit';
import ListWrapper from '../../components/ListWrapper';
import TodoItem from './TodoItem';

const TodoListWrapper = styled.div`
  min-width: 500px;
  text-align: center;

  header {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-right: 8px;
      font-size: 21px;
      animation: ${({ theme }) => theme.animations.fadeIn};
    }
  }

  h2,
  h3 {
    animation: ${({ theme }) => theme.animations.fromRight};
  }
`;

type Props = {
  completedTodos: Array<Todo>;
  incompleteTodos: Array<Todo>;
  isLoading: boolean;
  onRemovePressed: (id: string) => void;
  onCompletePressed: (id: string) => void;
  startLoadingTodos: () => void;
};

const TodoList: React.FC<Props> = (props: Props): JSX.Element => {
  useEffect(() => {
    props.startLoadingTodos();
  }, []);

  const getList = (items: Todo[], label: string) => (
    <ListWrapper label={label}>
      {() =>
        items.map((item, i) => (
          <TodoItem
            key={i}
            todo={item}
            onCompletePressed={props.onCompletePressed}
            onRemovePressed={props.onRemovePressed}
          />
        ))
      }
    </ListWrapper>
  );

  const todoListContent = (
    <>
      <TodoForm todos={props.incompleteTodos} />
      {getList(props.incompleteTodos, 'To be completed')}
      {getList(props.completedTodos, 'Completed')}
    </>
  );

  return (
    <TodoListWrapper>
      <header>
        <FaTasks />
        <h2>Todo list</h2>
      </header>
      {props.isLoading ? <Loader /> : todoListContent}
    </TodoListWrapper>
  );
};

const mapState = (state: TodoState) => ({
  isLoading: getTodosLoading(state),
  completedTodos: getCompletedTodos(state),
  incompleteTodos: getIncompleteTodos(state)
});

const mapDispatch = (dispatch: ThunkDispatch<TodoState, void, Action>) => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovePressed: (id: string) => dispatch(removeTodoRequest(id)),
  onCompletePressed: (id: string) => dispatch(markTodoAsCompleteRequest(id))
});

const connector = connect(mapState, mapDispatch);

export default connector(TodoList);
