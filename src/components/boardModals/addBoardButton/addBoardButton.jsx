import React from 'react'
import sprite from 'images/icons.svg'
import { StyledCreateBtn, StyledButton, StyledSVG } from './addBoardButton.styled'

export const AddBoardButton = ({ onClick }) => {
    return (
        <StyledCreateBtn onClick={onClick}>
          Create a new board
          <StyledButton>
            <StyledSVG>
                <use xlinkHref={`${sprite}#icon-plus`}></use>
            </StyledSVG>
          </StyledButton>
        </StyledCreateBtn>
    )
  }