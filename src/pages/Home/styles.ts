import styled from "styled-components";

export const Header = styled.header`
  width: 1000px;
  padding: 1rem;
  margin: 0 auto;

  display: flex;
  justify-content: space-around;
  align-items: center;

  color: ${(props) => props.theme.colors.red500};

  ul {
    list-style: none;
    font-size: 1rem;
    font-weight: bold;

    li {
      display: flex;
      align-items: center;
    }
  }

  h1 {
    font-family: "Brush Script MT", cursive;
    font-size: 2rem;
    text-align: center;
  }

  @media (max-width: 1050px) {
    width: 800px;
  }
  @media (max-width: 850px) {
    width: 600px;
  }
  @media (max-width: 650px) {
    width: 300px;

    display: block;

    ul {
      opacity: 0;
      visibility: hidden;
    }
  }
`;
