import styled from "styled-components";

export const Title = styled.h1`
  font-size: 2rem;
  padding: 1rem;
  text-align: center;
  color: ${(props) => props.theme.white};
`;
export const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: linear-gradient(
    ${(props) => props.theme.blue500},
    ${(props) => props.theme.blue100}
  );
`;
