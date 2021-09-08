import styled from "styled-components";

export const ButtonApp = styled.button`
  background: var(--yellow);
  padding: 0.8rem 1rem;

  border-radius: 50px;
  border: 0;
  color: #855b35;

  font-weight: 300 !important;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(1.2);
    color: #000;
  }
`;

export const ButtonDownloader = styled.button`
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
`;
