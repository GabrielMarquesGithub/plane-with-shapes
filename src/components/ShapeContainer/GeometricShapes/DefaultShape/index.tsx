import { MouseEvent } from "react";

import { positionType } from "../../../../types/ShapeContainerTypes";

import { Shape } from "./styles";

type DefaultShapePropsType = {
  position: positionType;
  color: string;
  onClick: (position: positionType) => void;
};

const DefaultShape = ({ position, color, onClick }: DefaultShapePropsType) => {
  const handleClick = (e: MouseEvent) => {
    e.stopPropagation();
    onClick(position);
  };

  const getCorrectPosition = (value: number) => {
    return `calc(${value}px - 1rem)`;
  };

  return (
    <Shape
      onClick={handleClick}
      style={{
        left: getCorrectPosition(position.X),
        top: getCorrectPosition(position.Y),
        background: color,
      }}
    />
  );
};

export default DefaultShape;
