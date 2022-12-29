import styled from "styled-components";
import {
  appearAnimation,
  expansionAnimation,
} from "../../../assets/style/variables/animations";

export const Shape = styled.div`
  width: 3rem;
  height: 3rem;

  position: absolute;

  cursor: pointer;

  animation: 400ms ${appearAnimation} forwards,
    600ms ${expansionAnimation} forwards;
`;
