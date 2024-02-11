
import styled from "styled-components";

export const StyledBoardList = styled.div`
  display: flex;
  padding: 22px 18px 22px 14px;
  margin: 0 auto;

  background-color: ${({ isActive }) =>
    isActive ? 'rgba(255, 255, 255, 0.2)' : 'transparent'};
`;

export const StyledBoardItem = styled.button`
  border: none;
  background: transparent;
  font-weight: 500;
  line-height: 1.5;
  text-align: start;
  padding: 0;
  color: ${({ isActive }) =>
    isActive ? 'rgba(255, 255, 255)' : 'rgba(255, 255, 255, 0.5)'};
  cursor: pointer;
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.white};
  }
`;

export const StyledSVGPensil = styled.svg`
  fill: transparent;
  stroke: rgba(255, 255, 255, 0.5);
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
  padding-right: ${p => p.theme.spacing(2)};

  width: 18px;
  height: 18px;
`;

export const StyledSVGTrash = styled.svg`
  fill: transparent;
  stroke: rgba(255, 255, 255, 0.5);

  width: 16px;
  height: 16px;
  &:hover,
  &:focus {
    stroke: ${p => p.theme.colors.white};
  }
`;

export const StyledBoardListBtn = styled.button`
  border: none;
  background-color: transparent;
  display: flex;

  margin: 0;
  padding: 0;
`;
export const StyledBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: auto;
  display: ${({ isActive }) => (isActive ? 'flex' : 'none')};
`;
