import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 80vh;
  background: url("../../assets/images/bg-hero.svg");

  background-size: 100%;
  background-color: var(--blue-light);
`;

export const ContentHeader = styled.div`
  border-bottom: 1px solid var(--blue-cyan);
`;

export const Content = styled.div`
  max-width: 1000px;
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

      &:last-child {
        border: 1px solid #fff;
        border-radius: 50px;
        padding: 0.6rem 1.5rem;
      }
    }
  }
`;
