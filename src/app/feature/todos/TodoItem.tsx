import React, { createRef, RefObject } from 'react';
import { Todo } from './Todo.model';
import { FaCheck, FaRegCheckCircle, FaRegCircle, FaTimes } from 'react-icons/fa';
import { SuccessButton, ErrorButton } from '../../components/Buttons';
import { ButtonContainer } from '../../components/ButtonContainer';
import styled from 'styled-components';

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  margin: 8px 0;
  background-color: #f9f9f9;
  border-radius: 4px;
  border: 1px solid #f9f9f9;
  box-shadow: 1px 1px 4px #888888;
  animation: ${({ theme }) => theme.animations.appear};

  &:not(:last-child) {
    margin-bottom: 0px;
  }
`;

const Item = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-right: 4px;

    &.completed {
      color: ${({ theme }) => theme.colors.success};
    }
  }
`;

const ItemContent = styled.div`
  text-align: left;

  h4 {
    margin: 0;
  }

  p {
    display: flex;
    justify-content: start;
    margin: 0;
    font-size: 12px;
    color: #666666;
  }
`;

type Props = {
  todo: Todo;
  onRemovePressed: (id: string) => void;
  onCompletePressed: (id: string) => void;
};

const TodoItem: React.FC<Props> = (props: Props): JSX.Element => {
  const { todo } = props;
  const itemRef: RefObject<HTMLDivElement> = createRef();

  const removeTodo = () => props.onRemovePressed(todo.id);
  const markTodoAsCompleted = () => props.onCompletePressed(todo.id);

  return (
    <ItemContainer ref={itemRef}>
      <Item>
        {todo.isCompleted ? <FaRegCheckCircle className="completed" /> : <FaRegCircle />}
        <ItemContent>
          <h4>{todo.text}</h4>
          {todo.createdAt && (
            <p>
              Created at:&nbsp;<b>{new Date(todo.createdAt).toLocaleDateString()}</b>
            </p>
          )}
        </ItemContent>
      </Item>
      <ButtonContainer>
        {todo.isCompleted ? null : (
          <SuccessButton onClick={markTodoAsCompleted}>
            Complete
            <FaCheck />
          </SuccessButton>
        )}
        <ErrorButton onClick={removeTodo}>
          Remove
          <FaTimes />
        </ErrorButton>
      </ButtonContainer>
    </ItemContainer>
  );
};

export default TodoItem;
