import React, { createRef, RefObject } from 'react';
import { toast } from 'react-toastify';
import { Todo } from './Todo.model';
import { FaCheck, FaRegCheckCircle, FaRegCircle, FaTimes } from "react-icons/fa";

type Props = {
  todo: Todo;
  onRemovePressed: (todo: Todo) => void;
  onCompletePressed: (todo: Todo) => void;
};

const TodoItem: React.FC<Props> = (props: Props): JSX.Element => {
  const { todo } = props;
  const itemRef: RefObject<HTMLDivElement> = createRef();

  const removeTodo = () => {
    // FIXME remove dirty hack
    itemRef.current?.classList.add('removing');
    setTimeout(() => {
      props.onRemovePressed(todo);
      itemRef.current?.classList.remove('removing');
    }, 500);
    toast.success('Todo removed!');
  };

  const markTodoAsCompleted = () => {
    props.onCompletePressed(todo);
    toast.success('Todo completed!');
  };

  return (
    <div className="todo-item-container" ref={itemRef}>
      <div className='todo-item-text'>
        {todo.isCompleted ? <FaRegCheckCircle className='completed'/> : <FaRegCircle /> }
        <h4>{todo.text}</h4>
      </div>
      <div className="button-container">
        {todo.isCompleted ? null : (
          <button className="button success" onClick={markTodoAsCompleted}>
            Complete
            <FaCheck />
          </button>
        )}
        <button className="button danger" onClick={removeTodo}>
          Remove
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
