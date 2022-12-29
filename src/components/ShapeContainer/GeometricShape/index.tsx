import { MouseEvent } from "react";

import { positionType } from "../../../types/ShapeContainerTypes";

import { Shape } from "./styles";

type GeometricShapePropsType = {
  position: positionType;
  color: string;
  shape: "square" | "circle" | "triangle";
  onClick: (position: positionType) => void;
};

const shapesStyle = {
  square: {},
  circle: { borderRadius: "100%" },
  triangle: { clipPath: "polygon(50% 20%, 0% 100%, 100% 100%)" },
};

const GeometricShape = ({
  position,
  color,
  shape,
  onClick,
}: GeometricShapePropsType) => {
  const handleClick = (e: MouseEvent) => {
    e.stopPropagation();
    onClick(position);
  };

  const getCorrectPosition = (value: number) => {
    return `calc(${value}px - 1.5rem)`;
  };

  const getShapeStyle = () => shapesStyle[shape];

  return (
    <Shape
      onClick={handleClick}
      style={{
        //estilos globais passados via props
        left: getCorrectPosition(position.X),
        top: getCorrectPosition(position.Y),
        transform: `rotate(${position.rotate}deg)`,
        background: color,
        //obtendo o estilo de cada forma
        ...getShapeStyle(),
      }}
    />
  );
};

export default GeometricShape;
