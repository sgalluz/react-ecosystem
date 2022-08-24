import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;

  button {
    display: flex;
    align-items: center;

    &:not(:last-child) {
      margin-right: 8px;
    }
    svg {
      margin-left: 4px;
    }
  }
`;
