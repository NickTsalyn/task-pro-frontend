import styled from "styled-components";

export const ScreensPageWrapper = styled.div`
  background-color: ${p=>p.theme.violetColors.violetFill};
  width: 100%;
  height: 100vh;
  display:flex;
  flex-direction: column;

  /* @media only screen and (min-width: 768px) {
     width: 758px;
  }

  @media only screen and (min-width: 1440px) {
     width :768px;
  } */
`;
