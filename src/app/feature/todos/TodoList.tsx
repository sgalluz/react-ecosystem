import React from 'react';
import { Todo } from './Todo.model';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { removeTodo } from './Todo.actions';
import { connect } from 'react-redux';
import store from '../../store/store';
import { Dispatch } from '@reduxjs/toolkit';
import { TodoState } from './Todo.slice';
import './Todos.scss';

type Props = {
  todos: Array<Todo>;
  onRemovePressed: (todo: Todo) => void;
};

const mapState = (state: TodoState) => ({ todos: state });

const mapDispatch = (dispatch: Dispatch) => ({
  onRemovePressed: (todo: Todo) => dispatch(removeTodo(todo))
});

const connector = connect(mapState, mapDispatch);

class TodoList extends React.Component<Props> {
  render(): React.ReactNode {
    const { todos } = store.getState();
    return (
      <div className="list-wrapper todo-list">
        <h2>Todo list</h2>
        <TodoForm />
        <h3>To be completed</h3>
        {todos.map((todo: Todo, i: number) => (
          <TodoItem key={i} todo={todo} onRemovePressed={this.props.onRemovePressed} />
        ))}
      </div>
    );
  }
}

export default connector(TodoList);
