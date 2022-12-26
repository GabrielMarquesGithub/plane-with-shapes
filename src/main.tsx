import React from "react";
import ReactDOM from "react-dom/client";

import GlobalStyle from "./assets/style/GlobalStyle";
import { Theme } from "./assets/style/theme";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Theme>
      <GlobalStyle />
      <App />
    </Theme>
  </React.StrictMode>
);
