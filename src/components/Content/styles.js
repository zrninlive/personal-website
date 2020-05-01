import styled, { keyframes } from 'styled-components';

const transitionIn = keyframes`
  from {
    transform: translateX(-50px);
    opacity: 0;
  }

  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const Container = styled.div`
  animation: ${transitionIn} 2s;

  padding: 100px 50px;
  width: 100%;
  min-width: 600px;
`;
