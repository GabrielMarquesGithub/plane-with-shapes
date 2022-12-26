// styled.d.ts
import "styled-components";
import { colors } from "./assets/style/colors";
//transformando as cores em um tipo
type theme = typeof colors;

declare module "styled-components" {
  export interface DefaultTheme extends theme {}
}
