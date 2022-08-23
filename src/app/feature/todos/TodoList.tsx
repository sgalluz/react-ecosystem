import React, { useEffect } from 'react';
import { Todo } from './Todo.model';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import Loader from '../../components/loader/Loader';
import { connect } from 'react-redux';
import { todosLoadingSelector, todosSelector, TodoState } from './Todo.slice';
import { useSelector } from 'react-redux';
import './Todos.scss';
import { loadTodos, removeTodoRequest, markTodoAsCompleteRequest } from './Todo.thunks';
import { FaTasks } from 'react-icons/fa';

type Props = {
  todos: Array<Todo>;
  onRemovePressed: (id: string) => void;
  onCompletePressed: (id: string) => void;
  isLoading: boolean;
  startLoadingTodos: () => void;
};

const TodoList: React.FC<Props> = (props: Props): JSX.Element => {
  const todos: Todo[] = useSelector(todosSelector);
  const isLoading: boolean = useSelector(todosLoadingSelector);

  useEffect(() => {
    props.startLoadingTodos();
  }, []);

  const loadingMessage = <Loader />;
  const todoListContent = (
    <>
      <TodoForm todos={todos} />
      <h3>To be completed</h3>
      {todos.map((todo: Todo, i: number) => (
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
      {isLoading ? loadingMessage : todoListContent}
    </div>
  );
};

const mapState = (state: TodoState) => ({
  todos: state.items,
  isLoading: state.isLoading
});
  
const mapDispatch = (dispatch: any) => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovePressed: (id: string) => dispatch(removeTodoRequest(id)),
  onCompletePressed: (id: string) => dispatch(markTodoAsCompleteRequest(id))
});

const connector = connect(mapState, mapDispatch);

export default connector(TodoList);
