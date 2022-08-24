import React, { useEffect } from 'react';
import { Todo } from './Todo.model';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import Loader from '../../components/Loader';
import { connect } from 'react-redux';
import { getTodosLoading, getCompletedTodos, getIncompleteTodos } from './Todo.selectors';
import { loadTodos, removeTodoRequest, markTodoAsCompleteRequest } from './Todo.thunks';
import { FaTasks } from 'react-icons/fa';
import { TodoState } from './Todo.slice';
import styled from 'styled-components';

const ListWrapper = styled.div`
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

type ItemListProps = {
  todos: Todo[];
  label: string;
  onRemovePressed: (id: string) => void;
  onCompletePressed: (id: string) => void;
};

const ItemList: React.FC<ItemListProps> = (props: ItemListProps): JSX.Element => (
  <>
    <h3>{props.label}</h3>
    {props.todos.map((todo: Todo, i: number) => (
      <TodoItem
        key={i}
        todo={todo}
        onRemovePressed={props.onRemovePressed}
        onCompletePressed={props.onCompletePressed}
      />
    ))}
  </>
);

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

  const loadingMessage = <Loader />;
  const todoListContent = (
    <>
      <TodoForm todos={props.incompleteTodos} />
      <ItemList
        todos={props.incompleteTodos}
        label={'To be completed'}
        onRemovePressed={props.onRemovePressed}
        onCompletePressed={props.onCompletePressed}
      />
      <ItemList
        todos={props.completedTodos}
        label={'Completed'}
        onRemovePressed={props.onRemovePressed}
        onCompletePressed={props.onCompletePressed}
      />
    </>
  );

  return (
    <ListWrapper>
      <header>
        <FaTasks />
        <h2>Todo list</h2>
      </header>
      {props.isLoading ? loadingMessage : todoListContent}
    </ListWrapper>
  );
};

const mapState = (state: TodoState) => ({
  isLoading: getTodosLoading(state),
  completedTodos: getCompletedTodos(state),
  incompleteTodos: getIncompleteTodos(state)
});

// FIXME typing dispatch
const mapDispatch = (dispatch: any) => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovePressed: (id: string) => dispatch(removeTodoRequest(id)),
  onCompletePressed: (id: string) => dispatch(markTodoAsCompleteRequest(id))
});

const connector = connect(mapState, mapDispatch);

export default connector(TodoList);
