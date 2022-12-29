// styled.d.ts
import "styled-components";
import { colors } from "./assets/style/colors";
import { gradients } from "./assets/style/gradients";
//transformando as cores em um tipo
type colorsType = colors;
type gradientsType = gradients;

type theme = {
  colors: colorsType;
  gradients: gradientsType;
};

declare module "styled-components" {
  export interface DefaultTheme extends theme {}
}
