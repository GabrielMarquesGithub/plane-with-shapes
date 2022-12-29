import { FiTriangle, FiCircle, FiSquare } from "react-icons/fi";

import { shapesOptionsType } from "../../../types/ShapeContainerTypes";

import { Container, Indicator } from "./styles";

type ShapeControlPropsType = {
  currentShape: string;
  changeShape: (shape: shapesOptionsType) => void;
};

const ShapeControl = ({ changeShape, currentShape }: ShapeControlPropsType) => {
  return (
    <Container onClick={(e) => e.stopPropagation()}>
      <ul>
        <li className={currentShape == "circle" ? "isActive" : ""}>
          <button onClick={() => changeShape("circle")}>
            <FiCircle />
          </button>
          <p>Círculo</p>
        </li>
        <li className={currentShape == "triangle" ? "isActive" : ""}>
          <button onClick={() => changeShape("triangle")}>
            <FiTriangle />
          </button>
          <p>Triângulo</p>
        </li>
        <li className={currentShape == "square" ? "isActive" : ""}>
          <button onClick={() => changeShape("square")}>
            <FiSquare />
          </button>
          <p>Quadrado</p>
        </li>
        <Indicator />
      </ul>
    </Container>
  );
};

export default ShapeControl;
