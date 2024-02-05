import styled from "styled-components";


export const StyledSidebar = styled.aside`
  /* min-width: 320px; */
width: 225px;
  background-color: ${p => p.theme.violetColors.accentColor};
  padding: 14px;
  /* max-width: 335px;
  display: flex;
  padding: ${p => p.theme.spacing(3.5)} ${p => p.theme.spacing(5)};
  margin: 0 auto; */

  /* @media screen and (min-width: 768px) {
    max-width: 704px;
    padding: ${p => p.theme.spacing(4.5)} ${p => p.theme.spacing(8)};
  } */

  @media screen and (min-width: 1440px) {
    width: 212px;
   padding: 24px;
  }
`;