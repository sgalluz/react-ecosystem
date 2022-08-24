import { Action } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { ThunkDispatch } from 'redux-thunk';
import styled from 'styled-components';
import { PrimaryButton } from '../../components/Buttons';
import { InputText } from '../../components/InputText';
import { Todo } from './Todo.model';
import { TodoState } from './Todo.slice';
import { addTodoRequest } from './Todo.thunks';

const FormContainer = styled.div`
  border: 1px solid #f9f9f9;
  box-shadow: 1px 1px 4px #888888;
  padding: 16px 8px;
  border-radius: 4px;
  display: flex;
  width: inherit;
  justify-content: space-between;
  animation: ${({ theme }) => theme.animations.fromLeftOneSec};

  input {
    min-width: 200px;
    max-width: 300px;
    margin-right: 8px;
  }
`;

type Props = {
  todos: Array<Todo>;
};

const TodoForm: React.FC<Props> = (props: Props): JSX.Element => {
  const [text, setText] = useState('');
  const dispatch: ThunkDispatch<TodoState, void, Action> = useDispatch();

  const updateValue = (e: React.FormEvent<HTMLInputElement>) => {
    setText(e?.currentTarget?.value);
  };

  const toggleCreate = () => {
    const isDuplicateText = props.todos.some((curr: Todo) => curr.text === text);
    if (isDuplicateText) {
      toast.warning('Todo with same content already exists!');
    } else {
      dispatch(addTodoRequest(text));
      setText('');
    }
  };

  return (
    <FormContainer>
      <InputText placeholder="Type your new todo here" value={text} onChange={updateValue} />
      <PrimaryButton disabled={!text} onClick={toggleCreate}>
        Create Todo
      </PrimaryButton>
    </FormContainer>
  );
};

export default TodoForm;
