import { createGlobalStyle } from "styled-components";
import { backgroundMoveAnimation } from "./variables/animations";

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html{
  @media (max-width: 1050px) {
    font-size: 100%;
  }
  @media (max-width: 850px) {
    font-size: 90%;
  }
  @media (max-width: 650px) {
    font-size: 80%;
  }
}

body{
  height: 100vh;

  -webkit-font-smoothing: antialiased;
  background: ${(props) => props.theme.colors.dark800};
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
