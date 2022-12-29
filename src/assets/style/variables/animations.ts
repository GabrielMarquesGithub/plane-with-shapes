import { keyframes } from "styled-components";

export const appearAnimation = keyframes`
0%{
  opacity: 0;
}
100%{
  opacity: 1;
}
`;

export const expansionAnimation = keyframes`
0%{
  transform: scale(1);
}
50%{
  transform: scale(1.2);
}
100%{
  transform: scale(1) rotate();
}
`;

export const backgroundMoveAnimation = keyframes`
0%{
  background-position: left;
}
100%{
  background-position: right;
}
`;
