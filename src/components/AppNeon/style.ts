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
`;
