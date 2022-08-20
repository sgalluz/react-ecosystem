import React, { createRef, RefObject } from 'react';
import { toast } from 'react-toastify';
import { Todo } from './Todo.model';

type Props = {
  todo: Todo;
  onRemovePressed: (todo: Todo) => void;
};

const TodoItem: React.FC<Props> = (props: Props): JSX.Element => {
  const { todo } = props;
  const itemRef: RefObject<HTMLDivElement> = createRef();

  const removeTodo = () => {
    // FIXME remove dirty hack
    itemRef.current?.classList.add('removing');
    setTimeout(() => props.onRemovePressed(todo), 500);
    toast.success('Todo removed!');
  };

  return (
    <div className="todo-item-container" ref={itemRef}>
      <h4>{todo.text}</h4>
      <div className="button-container">
        <button className="button success" disabled={true}>
          Mark as Completed
        </button>
        <button className="button danger" onClick={removeTodo}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
