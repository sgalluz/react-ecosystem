import React from 'react';
import styled from 'styled-components';

const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

const LoaderSpinner = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
`;

const SpinnerBall = styled.div`
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.yellow};
  animation-timing-function: cubic-bezier(0, 1, 1, 0);

  &:nth-child(1) {
    left: 8px;
    animation: spinner-ball-in 0.6s infinite;
  }

  &:nth-child(2) {
    left: 8px;
    animation: spinner-ball-mid 0.6s infinite;
  }

  &:nth-child(3) {
    left: 32px;
    animation: spinner-ball-mid 0.6s infinite;
  }

  &:nth-child(4) {
    left: 56px;
    animation: spinner-ball-out 0.6s infinite;
  }

  @keyframes spinner-ball-in {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes spinner-ball-mid {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }

  @keyframes spinner-ball-out {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
`;

const Loader: React.FC = (): JSX.Element => {
  return (
    <LoaderContainer>
      <LoaderSpinner>
        <SpinnerBall />
        <SpinnerBall />
        <SpinnerBall />
        <SpinnerBall />
      </LoaderSpinner>
    </LoaderContainer>
  );
};

export default Loader;
