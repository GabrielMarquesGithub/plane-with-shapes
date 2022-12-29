import { useState, useEffect } from "react";

import {
  positionType,
  shapesOptionsType,
} from "../../types/ShapeContainerTypes";

import objectIsEqual from "../../utils/comparison/objectIsEqual";
import getRandomNumber from "../../utils/generators/getRandomNumber";
import { getAleatoryColor } from "./getAleatoryColor";

type shapeType = {
  color: string;
  shape: shapesOptionsType;
  position: positionType;
};

type stateHistoryType = {
  previous: shapeType[][];
  next: shapeType[][];
};

export default function useShapes() {
  //dados atuais
  const [shapes, setShapes] = useState<shapeType[]>([]);
  //controle da forma
  const [selectedShape, setSelectedShape] =
    useState<shapesOptionsType>("square");

  //persistência de histórico de alteração
  const [stateHistory, setStateHistory] = useState<stateHistoryType>({
    previous: [],
    next: [],
  });

  //funções manipuladoras do estado atual
  const addShape = (position: Omit<positionType, "rotate">) => {
    const newShape = {
      color: getAleatoryColor(),
      shape: selectedShape,
      position: { ...position, rotate: getRandomNumber(0, 360) },
    };

    setStateHistory({
      previous: [...stateHistory.previous, shapes],
      next: [],
    });

    return setShapes([...shapes, newShape]);
  };

  const removeShape = (position: positionType) => {
    const newStateOfShapes = shapes.filter(
      (shape) => !objectIsEqual(shape.position, position)
    );

    setStateHistory({
      previous: [...stateHistory.previous, shapes],
      next: [],
    });

    return setShapes(newStateOfShapes);
  };

  //funções de controle de forma
  const selectShape = (shape: "triangle" | "circle" | "square") => {
    setSelectedShape(shape);
  };

  //funções de controle de histórico
  const returnPreviousState = () => {
    const newStateOfShapes = stateHistory.previous.pop();

    if (!newStateOfShapes) return;

    setShapes(newStateOfShapes);

    setStateHistory({
      previous: stateHistory.previous,
      next: [...stateHistory.next, shapes],
    });
  };

  const returnLaterState = () => {
    const newStateOfShapes = stateHistory.next.pop();

    if (!newStateOfShapes) return;

    setShapes(newStateOfShapes);

    setStateHistory({
      previous: [...stateHistory.previous, shapes],
      next: stateHistory.next,
    });
  };

  return {
    shapes,
    selectedShape,
    addShape,
    removeShape,
    selectShape,
    returnPreviousState,
    returnLaterState,
  };
}
