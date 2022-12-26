import styled, { keyframes } from "styled-components";

const shapeApearAnimation = keyframes`
0%{
  transform: scale(1);
}
50%{
  transform: scale(1.2);
}
100%{
  transform: scale(1);
}
`;

export const Shape = styled.div`
  width: 2rem;
  height: 2rem;
  background: black;
  position: absolute;
  cursor: pointer;
  animation: 400ms ${shapeApearAnimation} forwards;
`;
