import styled from "styled-components";

export const Comment = styled.section`
  height: 50vh;
`;

export const Content = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: center;
  padding-top: 5rem;
  padding-bottom: 5rem;

  flex-direction: column;

  .content-top {
    display: flex;
    justify-content: space-between;

    h1 {
      font-size: 2rem;
      font-weight: bold;
      color: #ccc;
    }
    h2 {
      font-weight: bold;
      font-size: 2rem;
    }
  }

  .comments {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2rem;

    .comment {
      width: 50%;
      background: #f7f7fa;

      padding: 1.5rem;
      border-radius: 0.5rem;

      & + .comment {
        margin-left: 1.5rem;
      }

      span {
        font-weight: 500;
      }

      p {
        width: 280px;
        font-size: 0.9rem;
        font-weight: 300;
        margin-top: 1rem;
      }
    }
  }
`;
