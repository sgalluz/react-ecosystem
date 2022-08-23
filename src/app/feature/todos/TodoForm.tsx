import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { Todo } from './Todo.model';
import { addTodoRequest } from './Todo.thunks';

type Props = {
  todos: Array<Todo>;
};

const TodoForm: React.FC<Props> = (props: Props): JSX.Element => {
  const [text, setText] = useState('');
  // FIXME typings
  const dispatch: any = useDispatch();

  const updateValue = (e: React.FormEvent<HTMLInputElement>) => {
    setText(e?.currentTarget?.value);
  };

  const toggleCreate = () => {
    const isDuplicateText = props.todos.some((curr: Todo) => curr.text === text);
    if (isDuplicateText) {
      toast.warning('To-Do with same content already exists!');
      return;
    }

    dispatch(addTodoRequest(text));
    toast.success('New To-Do created!');
    setText('');
  };

  return (
    <div className="todo-form">
      <input
        className="todo-text"
        type="text"
        placeholder="Type your new todo here"
        value={text}
        onChange={updateValue}
      />
      <button className="button primary" disabled={!text} onClick={toggleCreate}>
        Create Todo
      </button>
    </div>
  );
};

export default TodoForm;
