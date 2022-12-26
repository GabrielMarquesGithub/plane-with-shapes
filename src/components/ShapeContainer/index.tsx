import { MouseEvent } from "react";

import { positionType } from "../../types/ShapeContainerTypes";

import { Container } from "./styles";

import DefaultShape from "./GeometricShapes/DefaultShape";
import useShapes from "../../hooks/useShapes";

type ShapeContainerPropsType = {};

const ShapeContainer = ({}: ShapeContainerPropsType) => {
  const { shapes, addShape, removeShape } = useShapes();

  const handleClick = (e: MouseEvent) => {
    //traduzindo para a posição desejada
    const containerPosition = e.currentTarget.getBoundingClientRect();
    const position = {
      X: e.pageX - containerPosition.left,
      Y: e.pageY - containerPosition.top,
    };
    addShape(position);
  };

  const handleShapeOnClick = (position: positionType) => {
    removeShape(position);
  };

  return (
    <Container onClick={handleClick}>
      {shapes?.map((shape, index) => (
        <DefaultShape
          position={shape.position}
          color={shape.color}
          key={index}
          onClick={handleShapeOnClick}
        />
      ))}
    </Container>
  );
};

export default ShapeContainer;
