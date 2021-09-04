import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 90vh;
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

export const Banner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  height: 80%;

  display: flex;
  align-items: center;

  color: #fff;

  .account {
    width: 50%;

    > span {
      display: block;
      margin-bottom: 1.5rem;

      font-size: 1.1rem;

      color: #b2e7f8;
    }

    h1 {
      font-size: 3rem;
      line-height: 3.5rem;

      margin-bottom: 1.5rem;
    }

    button {
      background: var(--yellow);
      padding: 0.8rem 1rem;

      border-radius: 50px;
      border: 0;

      color: #855b35;

      margin-bottom: 1.5rem;
    }
  }

  .digital {
    background-image: url("../../assets/images/Group141.svg");
    background-position: center;
    h1 {
      font-size: 3rem;
      color: #b2e7f8;
    }

    img {
      width: 40%;
    }
  }
`;
