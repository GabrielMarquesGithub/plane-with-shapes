import styled from "styled-components";

export const Indicator = styled.div`
  width: 4rem;
  height: 4rem;

  position: absolute;
  top: -40%;
  left: 0;
  z-index: -1;

  border-radius: 100%;
  background: ${(props) => props.theme.colors.red500};

  transition: 300ms;

  &::before {
    content: "";
    width: 30px;
    height: 30px;

    position: absolute;
    left: -22px;
    top: -5px;

    box-shadow: 15px 15px ${(props) => props.theme.colors.red500};
    border-radius: 50%;
    background: transparent;
  }

  &::after {
    content: "";
    width: 30px;
    height: 30px;

    position: absolute;
    right: -22px;
    top: -5px;

    box-shadow: -15px 15px ${(props) => props.theme.colors.red500};
    border-radius: 50%;
    background: transparent;
  }
`;

export const Container = styled.nav`
  width: 20rem;

  position: relative;
  z-index: 999;

  color: ${(props) => props.theme.colors.white};

  ul {
    height: 4rem;

    display: flex;
    justify-content: space-around;
    align-items: center;

    list-style: none;
    background: ${(props) => props.theme.colors.red500};
    border-radius: 1rem;

    li {
      display: flex;
      justify-content: center;
      align-items: center;

      button {
        outline: none;
        border: none;
        background: none;
        color: ${(props) => props.theme.colors.white};

        transition: 400ms;

        svg {
          font-size: 2rem;
        }
      }

      p {
        position: absolute;
        top: 50%;

        visibility: hidden;
        opacity: 0;
        font-weight: bold;
        user-select: none;

        transition: 300ms;
      }

      &.isActive {
        button {
          transform: translateY(-1.5rem);
        }

        p {
          visibility: visible;
          opacity: 1;
        }
      }
    }

    li:nth-child(1).isActive ~ ${Indicator} {
      transform: translateX(1.3rem);
    }

    li:nth-child(2).isActive ~ ${Indicator} {
      transform: translateX(8rem);
    }

    li:nth-child(3).isActive ~ ${Indicator} {
      transform: translateX(14.7rem);
    }
  }
`;
