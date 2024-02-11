import React from 'react';
import sprite from '../../../images/icons.svg';
import '../ColumnModal.css';
import {
  AddColumnTitle,
  AddColumnInput,
  AddColumnBtn,
  IconWhiteWrap,
  StyledSvgDarkPlus,
  ColumnModalWrapper,
  ThumbColumnWrapper,
} from '../../Button/AddColumnButton.styled';
import '../ColumnModal.css';
import { ModalCloseButton, StyledSvgClose } from '../ColumnModal.styled';

export const EditColumnModal = ({ onCloseModal }) => {
  const handlerTitleColumn = evt => {
    evt.preventDefault();
  };

  return (
    <ColumnModalWrapper>
      <ThumbColumnWrapper>
        <div>
          <AddColumnTitle>Edit column</AddColumnTitle>

          <ModalCloseButton onClick={onCloseModal}>
            <StyledSvgClose>
              <use xlinkHref={`${sprite}#icon-x-close`}></use>
            </StyledSvgClose>
          </ModalCloseButton>

          <form onSubmit={handlerTitleColumn}>
            <AddColumnInput
              type="text"
              name="title"
              placeholder="To Do"
              autoFocus
            />
            <AddColumnBtn type="submit" onClick={onCloseModal}>
              <IconWhiteWrap>
                <StyledSvgDarkPlus>
                  <use xlinkHref={`${sprite}#icon-plus`}></use>
                </StyledSvgDarkPlus>
              </IconWhiteWrap>
              Add
            </AddColumnBtn>
          </form>
        </div>
      </ThumbColumnWrapper>
    </ColumnModalWrapper>
  );
};
