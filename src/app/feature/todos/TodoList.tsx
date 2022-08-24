import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Todo } from './Todo.model';
import TodoItem from './TodoItem';

type Props = {
  items: Todo[];
  label: string;
  onRemovePressed: (id: string) => void;
  onCompletePressed: (id: string) => void;
};

const TodoList: React.FC<Props> = (props: Props): JSX.Element => (
  <>
    <h3>{props.label}</h3>
    <TransitionGroup>
      {props.items.map((todo: Todo, i: number) => (
        <CSSTransition
          key={i}
          classNames={{
            enterActive: 'entering',
            exitActive: 'removing'
          }}
          timeout={500}
        >
          <TodoItem
            todo={todo}
            onRemovePressed={props.onRemovePressed}
            onCompletePressed={props.onCompletePressed}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  </>
);

export default TodoList;