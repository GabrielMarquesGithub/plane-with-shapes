import getRandomNumber from "../../utils/generators/getRandomNumber";

export function getAleatoryColor() {
  const colorArray = [
    "#2a850e",
    "#02c39a",
    "#4cc9f0",
    "#c1121f",
    "#ff8600",
    "#ffea00",
  ];
  return colorArray[getRandomNumber(0, 6)];
}
