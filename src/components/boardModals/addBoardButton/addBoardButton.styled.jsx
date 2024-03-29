import styled from 'styled-components'

export const StyledSVG = styled.svg`
  stroke:  ${p => p.theme.currentTheme.plusIconFill};
  width: 20px;
  height: 20px;
`

export const StyledButton = styled.span`
  width: 40px;
  height: 36px;
  border-radius: 6px;
  background-color:${p => p.theme.currentTheme.btnPlusFill};
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;

  &:hover {
    background-color: ${p => p.theme.currentTheme.hoverBtnPlusFill};
  }
`

export const StyledCreateBtn = styled.button`
    border: none;
    background-color: transparent;
    width: 100%;
    font-weight: 500;
    line-height: 1.5;
    text-align: start;

    color:  ${p => p.theme.currentTheme.iconNeedHelp};
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`