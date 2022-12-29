import styled from "styled-components";

export const Container = styled.main`
  width: 1080px;
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
`;
