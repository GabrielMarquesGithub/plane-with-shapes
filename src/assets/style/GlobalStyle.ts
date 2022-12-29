import { createGlobalStyle } from "styled-components";
import { backgroundMoveAnimation } from "./variables/animations";

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  height: 100vh;

  -webkit-font-smoothing: antialiased;
  background: ${(props) => props.theme.colors.blue100};

}
body,
input,
textarea,
select,
button {
  font: 500 1rem "Helvetica", sans-serif;
}
button {
  cursor: pointer;
}
a {
  //o inherit faz com que ele assuma as cores do elemento pai
  color: inherit;
  text-decoration: none;
}
`;

export default GlobalStyle;
