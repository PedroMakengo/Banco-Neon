import styled from "styled-components";
import bgHero from "../../assets/images/bg-hero.svg";
import bgVetor from "../../assets/images/Group141.svg";

export const Container = styled.header`
  width: 100%;
  height: 95vh;
  background: url(${bgHero});
  background-repeat: no-repeat;

  background-size: 130%;
  background-color: var(--blue-light);
`;

export const ContentHeader = styled.div`
  border-bottom: 1px solid var(--blue-cyan);
`;

export const Content = styled.div`
  max-width: 1100px;
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
  max-width: 1100px;
  margin: 0 auto;
  height: 80%;

  display: flex;
  align-items: center;

  color: #fff;

  .account {
    width: 50%;

    .icons {
      margin-top: 2rem;

      display: flex;
      align-items: center;
      justify-content: space-between;

      .item {
        width: 33%;
        height: auto;
        display: flex;

        div {
          background-color: #11b9dc;
          width: 36%;
          height: 40px;
          border-radius: 50%;
          border: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          img {
            width: 20px;
            height: 20px;
          }
        }

        & + .item {
        }
      }
      p {
        width: 200px;
        font-size: 1rem;
        font-weight: 100;
        margin-left: 1rem;
      }
    }

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
    background-image: url(${bgVetor});
    background-size: 90%;
    background-position: center;

    background-repeat: no-repeat;
    width: 70%;
    height: 55vh;

    h1 {
      font-size: 3rem;
      color: #b2e7f8;
      margin: 0 auto;
      text-align: center;
    }

    img {
      width: 40%;
    }
  }
`;
