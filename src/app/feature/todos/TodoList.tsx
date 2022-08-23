import React, { useEffect } from 'react';
import { Todo } from './Todo.model';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import Loader from '../../components/loader/Loader';
import { connect } from 'react-redux';
import { getTodosLoading, getTodos, getCompletedTodos, getIncompleteTodos } from './Todo.selectors';
import './Todos.scss';
import { loadTodos, removeTodoRequest, markTodoAsCompleteRequest } from './Todo.thunks';
import { FaTasks } from 'react-icons/fa';
import { TodoState } from './Todo.slice';
import { useSelector } from 'react-redux';

type Props = {
  completedTodos: Array<Todo>;
  incompleteTodos: Array<Todo>;
  onRemovePressed: (id: string) => void;
  onCompletePressed: (id: string) => void;
  isLoading: boolean;
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
      <h3>To be completed</h3>
      {props.incompleteTodos.map((todo: Todo, i: number) => (
        <TodoItem
          key={i}
          todo={todo}
          onRemovePressed={props.onRemovePressed}
          onCompletePressed={props.onCompletePressed}
        />
      ))}
      <h3>Completed</h3>
      {props.completedTodos.map((todo: Todo, i: number) => (
        <TodoItem
          key={i}
          todo={todo}
          onRemovePressed={props.onRemovePressed}
          onCompletePressed={props.onCompletePressed}
        />
      ))}
    </>
  );

  return (
    <div className="list-wrapper todo-list">
      <header>
        <FaTasks />
        <h2>Todo list</h2>
      </header>
      {props.isLoading ? loadingMessage : todoListContent}
    </div>
  );
};

const mapState = (state: TodoState) => ({
  isLoading: getTodosLoading(state),
  completedTodos: getCompletedTodos(state),
  incompleteTodos: getIncompleteTodos(state)
});

const mapDispatch = (dispatch: any) => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovePressed: (id: string) => dispatch(removeTodoRequest(id)),
  onCompletePressed: (id: string) => dispatch(markTodoAsCompleteRequest(id))
});

const connector = connect(mapState, mapDispatch);

export default connector(TodoList);
