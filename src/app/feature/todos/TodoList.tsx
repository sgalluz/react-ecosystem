import React from 'react';
import { Todo } from './Todo.model';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { markAsCompleted, removeTodo } from './Todo.actions';
import { connect } from 'react-redux';
import { Dispatch } from '@reduxjs/toolkit';
import { todosSelector, TodoState } from './Todo.slice';
import { useSelector } from 'react-redux';
import './Todos.scss';

type Props = {
  todos: Array<Todo>;
  onRemovePressed: (todo: Todo) => void;
  onCompletePressed: (todo: Todo) => void;
};

const TodoList: React.FC<Props> = (props: Props): JSX.Element => {
  const todos: Todo[] = useSelector(todosSelector);
  return (
    <div className="list-wrapper todo-list">
      <h2>Todo list</h2>
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
    </div>
  );
};

const mapState = (state: TodoState) => ({ todos: state });

const mapDispatch = (dispatch: Dispatch) => ({
  onRemovePressed: (todo: Todo) => dispatch(removeTodo(todo)),
  onCompletePressed: (todo: Todo) => dispatch(markAsCompleted({ ...todo, isCompleted: true }))
});

const connector = connect(mapState, mapDispatch);

export default connector(TodoList);
