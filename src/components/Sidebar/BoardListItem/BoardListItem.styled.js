import styled from "styled-components";

export const StyledBoardList = styled.div`
display: flex;
/* justify-content: space-between; */
padding: 20px 0;
margin: 0 auto;

background-color: ${({ isActive }) => (isActive ? 'rgba(255, 255, 255, 0.5)' : 'transparent')};
color: ${({ isActive }) => (isActive ? 'rgba(255, 255, 255)' : 'rgba(255, 255, 255, 0.5)')};
opacity: ${({ isActive }) => (isActive ? '0.4' : '')};

`;

export const StyledBoardItem = styled.button`
border: none;
background: transparent;
font-weight: 500;
line-height: 1.5;
text-align: start;
padding: 0;
/* color: rgb(255, 255, 255); */
background-color: ${({ isActive }) => (isActive ? 'rgba(255, 255, 255, 0.5)' : 'transparent')};
color: ${({ isActive }) => (isActive ? 'rgba(255, 255, 255)' : 'rgba(255, 255, 255, 0.5)')};
cursor: pointer;
&:hover,
  &:focus {
    color: ${p => p.theme.colors.white};
  }
`;

export const StyledSVGPensil = styled.svg`
  fill:transparent;
  stroke: rgba(255, 255, 255, 0.5);

  /* background-color:white; */
  width: 16px;
  height: 16px;
  &:hover,
  &:focus {
    stroke: ${p => p.theme.colors.white};
  }
`;

export const StyledSVGIcon = styled.svg`
  fill: transparent;
  stroke: rgba(255, 255, 255, 1);
  padding-right: 8px;

  width: 18px;
  height: 18px;

`;

export const StyledSVGTrash = styled.svg`
  fill: transparent;
  stroke: rgba(255, 255, 255, 0.5);
  /* background-color:white; */
  width: 16px;
  height: 16px;
  &:hover,
  &:focus {
    stroke: ${p => p.theme.colors.white};
  }
`;

export const StyledBoardListdBtn = styled.button`
border: none;
background-color: transparent;
display: flex;
/* width: 16px;
height: 16px; */
margin: 0;
padding: 0;

`
export const StyledBtnWrapper = styled.div`
display: flex;
align-items: center;
gap: 8px;
margin-left: auto;
`
