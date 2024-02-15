import styled from 'styled-components';

export const StyledBoardList = styled.div`
  display: flex;
  padding: 22px 18px 22px 14px;
  margin: 0 auto;
  justify-content: space-between;
  background-color: ${({ isActive }) =>
    isActive ? 'rgba(255, 255, 255, 0.2)' : 'transparent'};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.white};
    stroke: ${p => p.theme.colors.white};
  }

  @media screen and (min-width: 768px) {
    padding: 21px 24px;
  }
`;

export const StyledBoardItem = styled.button`
  border: none;
  background: transparent;
  font-weight: 500;
  line-height: 1.5;
  text-align: start;
  padding: 0;
  display: flex;
  gap: 4px;
  color: ${({ isActive, theme }) =>
    isActive ? theme.currentTheme.iconNeedHelp : theme.currentTheme.greySubtitle};
  cursor: pointer;
  &:hover,
  &:focus {
    color: ${p => p.theme.currentTheme.iconNeedHelp};
   
  }
  svg {
    width: 18px;
    height: 18px;
    fill: transparent;
    stroke: ${({ isActive,theme }) =>
      isActive ?  theme.currentTheme.iconNeedHelp : theme.currentTheme.greySubtitle};
  }

  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`;

export const StyledSVGPensil = styled.svg`
  fill: transparent;
  stroke:  ${p => p.theme.currentTheme.iconNeedHelp};
  width: 16px;
  height: 16px;
  &:hover,
  &:focus {
    stroke: ${p => p.theme.currentTheme.accent};
  }
`;

export const StyledSVGTrash = styled.svg`
  fill: transparent;
  stroke: ${p => p.theme.currentTheme.iconNeedHelp};

  width: 16px;
  height: 16px;
  &:hover,
  &:focus {
    stroke: ${p => p.theme.currentTheme.accent};
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
  display: ${({ isActive }) => (isActive ? 'flex' : 'none')};
`;
