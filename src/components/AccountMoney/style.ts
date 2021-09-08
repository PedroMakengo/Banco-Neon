import styled from "styled-components";

export const Container = styled.section`
  height: 100vh;
`;

export const Content = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;

  .account {
    width: 50%;

    h1 {
      font-size: 2rem;
      color: #ccc;
    }

    .account-title {
      width: 500px;
      font-size: 1.3rem;
      font-weight: bold;
      color: #000;
    }

    .items {
      margin-top: 2rem;
      .item {
        display: flex;

        & + .item {
          margin-top: 1.5rem;
        }

        h3 {
          color: #322f3d;
          font-size: 1rem;
        }
        p {
          font-weight: 300;
          font-size: 1rem;
          color: #ccc;
        }

        img {
          width: 50px;
          margin-right: 1.2rem;
        }
      }
    }
  }

  > img {
    width: 50%;
  }
`;
