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
  }

  img {
    width: 50%;
  }
`;
