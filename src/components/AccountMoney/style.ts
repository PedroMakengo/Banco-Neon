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

    .account-title {
      width: 350px;
    }
  }

  img {
    width: 50%;
  }
`;
