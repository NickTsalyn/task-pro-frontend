import styled from 'styled-components'

export const StyledSVG = styled.svg`
  stroke: ${props => props.theme.colors.white};
  width: 20px;
  height: 20px;
`

export const StyledButton = styled.span`
  margin-left: 40px;
  width: 40px;
  height: 36px;
  border-radius: 6px;
  background-color: rgb(184, 188, 253);
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;

  &:hover {
    background-color: rgba(151, 156, 234, 1);
  }
`

export const StyledCreateBtn = styled.button`
    border: none;
    background-color: transparent;
    width: 100%;
    font-weight: 500;
    line-height: 1.5;
    text-align: start;

    color: rgb(255, 255, 255);
    padding: 0;
    display: flex;
`