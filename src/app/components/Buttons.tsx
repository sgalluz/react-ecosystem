import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  text-align: center;
  max-width: 140px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 6px;
  border-radius: 4px;
  opacity: 0.8;
  transition: linear 0.3s all;
  box-shadow: 1px 1px 2px #888888;

  &:hover {
    cursor: pointer;
    opacity: 1;
  }

  &[disabled] {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export const PrimaryButton = styled(Button)`
  color: #e9e9e9;
  background-color: ${({ theme }) => theme.colors.primary};
  border: 1px solid darkblue;
`;

export const SuccessButton = styled(Button)`
  color: #e9e9e9;
  background-color: ${({ theme }) => theme.colors.success};
  border: 1px solid darkgreen;
`;

export const WarningButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.warning};
  border: 1px solid darkorange;
`;

export const ErrorButton = styled(Button)`
  color: #e9e9e9;
  background-color: ${({ theme }) => theme.colors.danger};
  border: 1px solid darkred;
`;
