import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  -webkit-font-smoothing: antialiased;
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
