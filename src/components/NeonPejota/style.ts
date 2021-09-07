import styled from "styled-components";

import Banner from "../../assets/images/banner-pj.png";
import Union from "../../assets/images/Union-7.svg";

export const Container = styled.section`
  height: 70vh;
`;

export const Content = styled.div`
  max-width: 1100px;
  height: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-image: url(${Union});
  background-repeat: no-repeat;
  background-position-x: 10rem;
  background-position-y: 1rem;

  padding-top: 8rem;

  .BaixaApp {
    width: 30%;
    text-align: center;
    margin-top: -1.5rem;

    .conteudoApp {
      margin-top: -2rem;
    }

    p {
      font-weight: 300;
      color: #ccc;
    }

    .buttons {
      display: flex;
      flex-direction: column;
      width: 60%;

      margin: 0 auto;
      margin-top: 2rem;

      button {
        padding: 0.6rem 1rem;
        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 15px;
        border: 0;

        background-color: #33303e;
        color: #fff;

        svg {
          font-size: 2rem;
          margin-right: 1rem;
        }
        & + button {
          margin-top: 1rem;
        }

        div {
          display: flex;
          flex-direction: column;

          span {
            font-weight: 400;
          }
        }
      }
    }
  }

  .NeonBanner {
    width: 64%;
    height: 100%;
    background-image: url(${Banner});
    background-repeat: no-repeat;
    background-size: 100%;
  }
`;
