import { useState } from "react";

import { positionType } from "../types/ShapeContainerTypes";

import objectIsEqual from "../utils/comparison/objectIsEqual";
import getRandomNumber from "../utils/generators/getRandomNumber";

type shapeType = {
  color: string;
  position: positionType;
};

export default function useShapes() {
  const [shapes, setShapes] = useState<shapeType[]>();

  const choseColor = () => {
    const colorArray = [
      "#2a850e",
      "#02c39a",
      "#4cc9f0",
      "#e05780",
      "#e01a4f",
      "#c1121f",
      "#ff8600",
      "#ffea00",
    ];
    return colorArray[getRandomNumber(0, 6)];
  };

  const addShape = (position: positionType) => {
    const newShape = {
      color: choseColor(),
      position: position,
    };
    setShapes([...(shapes ?? []), newShape]);
  };

  const removeShape = (position: positionType) => {
    const newShapes = shapes?.filter(
      (shape) => !objectIsEqual(shape.position, position)
    );
    setShapes(newShapes);
  };

  return { shapes, addShape, removeShape };
}
