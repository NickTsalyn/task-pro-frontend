import React from 'react'
import styled from 'styled-components'
import sprite from 'images/icons.svg'

const StyledSVG = styled.svg`
  stroke: ${props => props.theme.colors.white};
  width: 20px;
  height: 20px;
`

const StyledButton = styled.button`
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

export const AddBoardButton = ({ onClick }) => {
    return (
      <StyledButton onClick={onClick}>
        <StyledSVG>
            <use xlinkHref={`${sprite}#icon-plus`}></use>
        </StyledSVG>
      </StyledButton>
    )
  }