import styled from "styled-components";

export const StyledSidebarText = styled.p`
font-weight: 500;
line-height: 1.5;
text-align: start;
font-size: 14px;
color: rgb(255, 255, 255);
`;

export const StyledSVGPensil = styled.svg`
  fill:transparent;
  stroke: ${p => p.theme.colors.greyIconColor};
  /* background-color:white; */
  width: 16px;
  height: 16px;

`;

export const StyledSVGTrash = styled.svg`
  fill: transparent;
  stroke: ${p => p.theme.colors.greyIconColor};
  /* background-color:white; */
  width: 16x;
  height: 16px;

`;

export const StyledBoardListdBtn = styled.button`
border: none;
background-color: transparent;
display: flex;
/* margin: auto 0; */

`
