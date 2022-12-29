import { MouseEvent, useCallback, useEffect, useRef } from "react";

import { positionType } from "../../types/ShapeContainerTypes";

import { Container } from "./styles";

import useShapes from "../../hooks/useShapes/useShapes";
import GeometricShape from "./GeometricShape";
import ShapeControl from "./ShapeControl";

const ShapeContainer = () => {
  const {
    shapes,
    selectedShape,
    addShape,
    removeShape,
    selectShape,
    returnPreviousState,
    returnLaterState,
  } = useShapes();

  //lidar com ações de click
  const handleClickOnContainer = (e: MouseEvent) => {
    //traduzindo para a posição desejada
    const containerPosition = e.currentTarget.getBoundingClientRect();
    const position = {
      X: e.pageX - containerPosition.left,
      Y: e.pageY - containerPosition.top,
    };
    addShape(position);
  };

  const handleClickShape = (position: positionType) => {
    removeShape(position);
  };

  //lidar com ações keyboard
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.ctrlKey && event.key === "z") {
      returnPreviousState();
    }
    if (event.ctrlKey && event.key === "y") {
      returnLaterState();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [returnPreviousState, returnLaterState]);

  return (
    <Container onClick={handleClickOnContainer}>
      {shapes?.map((shape, index) => (
        <GeometricShape
          position={shape.position}
          color={shape.color}
          shape={shape.shape}
          key={index}
          onClick={handleClickShape}
        />
      ))}
      <ShapeControl currentShape={selectedShape} changeShape={selectShape} />
    </Container>
  );
};

export default ShapeContainer;
