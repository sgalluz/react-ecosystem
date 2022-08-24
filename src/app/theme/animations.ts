import { css, keyframes } from 'styled-components';

const appear = keyframes`
  0% {
    opacity: 0;
    // transform: translateY(50px);
    height: 0;
  }
  100% {
    opacity: 1;
    height: auto;
    // transform: translateY(0);
  }
`;

const disappear = keyframes`
  0% {
    opacity: 1;
    transform: rotateX(0deg);
    transform-origin: top;
  }
  100% {
    opacity: 0;
    transform: rotateX(70deg);
    transform-origin: top;
  }
`;

const fromLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-25%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fromRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(25%);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }`;

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const animations = {
  keyframes: {
    appear,
    disappear,
    fromLeft,
    fromRight,
    fadeIn
  },
  appear: css`
    ${appear} 0.5s ease 0s 1 normal forwards
  `,
  disappear: css`
    ${disappear} 0.5s ease 0s 1 normal forwards
  `,
  fromLeft: css`
    ${fromLeft} 0.5s ease 0s 1 normal forwards
  `,
  fromLeftOneSec: css`
    ${fromLeft} 1s ease 0s 1 normal forwards
  `,
  fromRight: css`
    ${fromRight} 0.5s ease 0s 1 normal forwards
  `,
  fadeIn: css`
    ${fadeIn} 1s ease 0s 1 normal forwards
  `
};

export default animations;
