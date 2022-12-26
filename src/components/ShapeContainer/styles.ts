import styled from "styled-components";

export const Container = styled.section`
  width: 80vw;
  height: 85vh;
  padding: 1rem;
  border: 3px solid ${(props) => props.theme.blue900};
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
  background: ${(props) => props.theme.gray100};
`;
