import styled from 'styled-components';

export const InputText = styled.input.attrs({ type: 'text' })`
  margin-right: 8px;
  padding: 6px;
  max-width: 240px;
  border-radius: 4px;
  border: 1px solid lightgrey;
  box-shadow: 1px 1px 2px #888888;

  &:placeholder-shown {
    text-overflow: ellipsis;
  }
`;
