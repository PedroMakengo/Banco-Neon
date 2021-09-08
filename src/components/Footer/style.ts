import styled from "styled-components";

export const FooterApp = styled.footer`
  height: 70vh;
  background-color: var(--blue);
`;

export const Content = styled.div`
  max-width: 1100px;
  margin: 0 auto;

  .footer-top {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 3rem 0;
    border-bottom: 0.3px solid #f7f7f7;

    color: #f7f7f7;

    > img {
      width: 120px;
    }

    .share-redes {
      display: flex;
      align-items: center;

      span {
        font-weight: 300;
      }

      .redes {
        margin-left: 1.5rem;
        display: flex;
        a {
          display: flex;
          width: 20px;

          & + a {
            margin-left: 1.5rem;
          }
        }
      }
    }
  }

  .footer-section {
    display: flex;
    align-items: center;

    border-bottom: 0.3px solid #f7f7f7;
    padding: 3rem 0;
    color: #fff;

    .footer-item {
      & + .footer-item {
        margin-left: 4rem;
      }
      h2 {
        font-size: 1rem;
      }
      nav {
        margin-top: 1.5rem;
        a {
          display: flex;
          flex-direction: column;
          text-decoration: none;
          color: #fff;
          font-size: 0.9rem;
          font-weight: 300;

          & + a {
            margin-top: 1.5rem;
          }
        }
      }
    }
  }
`;
