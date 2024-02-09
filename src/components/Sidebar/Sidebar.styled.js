import styled from "styled-components";

export const StyledSidebar = styled.aside`
width: 197px;
background-color: ${p => p.theme.violetColors.accentColor};
padding: 14px;
z-index: 2;
position: absolute;
left: 0;

  /* max-width: 335px;
  display: flex;
  padding: ${p => p.theme.spacing(3.5)} ${p => p.theme.spacing(5)};
  margin: 0 auto; */

  @media screen and (min-width: 768px) {
  width: 212px;
   padding: 24px;
  }
`;
