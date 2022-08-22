import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { createTodo } from './Todo.actions';
import { Todo } from './Todo.model';

type Props = {
  todos: Array<Todo>;
};

const TodoForm: React.FC<Props> = (props: Props): JSX.Element => {
  const [todo, setTodo] = useState(new Todo());
  const dispatch = useDispatch();

  const updateValue = (e: React.FormEvent<HTMLInputElement>) => {
    const text: string = e?.currentTarget?.value;
    setTodo({ ...todo, text });
  };

  const toggleCreate = () => {
    const isDuplicateText = props.todos.some((curr: Todo) => curr.text === todo.text);
    if (isDuplicateText) {
      toast.warning('To-Do with same content already exists!');
      return;
    }

    dispatch(createTodo(todo));
    toast.success('New To-Do created!');
    setTodo(new Todo());
  };

  return (
    <div className="todo-form">
      <input
        className="todo-text"
        type="text"
        placeholder="Type your new todo here"
        value={todo.text}
        onChange={updateValue}
      />
      <button className="button primary" disabled={!todo.text} onClick={toggleCreate}>
        Create Todo
      </button>
    </div>
  );
};

export default TodoForm;
