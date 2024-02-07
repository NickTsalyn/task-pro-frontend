import React from 'react'
import styled from 'styled-components'
import sprite from 'images/icons.svg'

const StyledSVG = styled.svg`
  fill: ${props => props.theme.colors.darkBgn};
  stroke: ${props => props.theme.colors.darkBgn};
  width: 20px;
  height: 20px;
`

const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 36px;
    background-color: ${props => props.theme.colors.lightGreen};
    border-radius: 6px;
    border: none;

    &:hover {
      background-color: rgba(157, 200, 136, 1);
    }
`

export const AddBoardButton = ({ onClick }) => {
    return (
      <StyledButton onClick={onClick}>
        <StyledSVG>
            <use xlinkHref={`${sprite}#icon-plus`}></use>
        </StyledSVG>
      </StyledButton>
    )
  }