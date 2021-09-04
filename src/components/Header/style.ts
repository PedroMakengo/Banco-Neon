import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 70vh;
  background: url("../../assets/images/bg-hero.svg");

  background-size: 100%;
  background-color: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  height: 7rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 120px;
  }

  nav {
    display: flex;
    align-items: center;

    a {
      text-decoration: none;
      color: #fff;
      font-weight: 100;

      & + a {
        margin-left: 2rem;
      }
    }
  }
`;
