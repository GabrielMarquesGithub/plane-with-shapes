import styled from "styled-components";

export const Container = styled.main`
  width: 1000px;
  height: 85vh;
  padding: 1rem;
  margin: 0 auto;
  border: 2px solid ${(props) => props.theme.colors.red500};

  position: relative;
  overflow: hidden;

  display: flex;
  align-items: flex-end;
  justify-content: center;

  border-radius: 1rem;
  background-image: ${(props) => props.theme.gradients.grid};
  background-size: 2rem 2rem;

  @media (max-width: 1050px) {
    width: 800px;
  }
  @media (max-width: 850px) {
    width: 600px;
  }
  @media (max-width: 650px) {
    width: 300px;
  }
`;
