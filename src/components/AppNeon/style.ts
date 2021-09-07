import styled from "styled-components";
import AppNeonBanner from "../../assets/images/AppNeon.png";

export const SectionApp = styled.section`
  height: 100vh;
  background-image: url(${AppNeonBanner});
  background-repeat: no-repeat;
  background-size: 35%;
  background-position-x: -3rem;
  background-position-y: 8rem;

  padding-bottom: 10rem;
`;

export const ContentApp = styled.div`
  max-width: 1100px;
  height: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .app {
    margin-top: 15rem;
    width: 63%;

    h1 {
      font-size: 2rem;
      font-weight: bold;
      width: 400px;
      margin-bottom: 3rem;

      color: #322f3d;
    }

    .itens {
      .item {
        display: flex;
        align-items: center;
        justify-content: space-between;

        padding-bottom: 1.5rem;
        border-bottom: 1px solid #ccc;

        & + .item {
          margin-top: 2rem;
        }

        img {
          margin-right: 1rem;
        }

        h2 {
          color: #575463;
          font-size: 1.5rem;
          font-weight: 600;
        }

        span {
          font-weight: 300;
          color: #ccc;
          font-size: 0.9rem;
        }

        svg {
          color: #ccc;
          margin-left: 2rem;
        }
      }
    }
  }
`;
