import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

import { colors } from "./colors";

export const Theme = ({ children }: { children: ReactNode }) => {
  const themeOBJ = colors;
  return <ThemeProvider theme={themeOBJ}>{children}</ThemeProvider>;
};
