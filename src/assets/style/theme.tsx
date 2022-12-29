import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

import { colors } from "./variables/colors";
import { gradients } from "./variables/gradients";

export const Theme = ({ children }: { children: ReactNode }) => {
  const themeOBJ = { colors, gradients };
  return <ThemeProvider theme={themeOBJ}>{children}</ThemeProvider>;
};
