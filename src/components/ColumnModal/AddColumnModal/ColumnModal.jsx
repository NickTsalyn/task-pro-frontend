import React, { useState } from 'react';
import { ColumnButton } from '../../Button/ColumnButton';

import sprite from '../../images/icons.svg';

import {
  Main,
  Section,
  ModalShowButton,
  AddColumnTitle,
  AddColumnInput,
  AddColumnBtn,
  IconWhiteWrap,
  IconVioletWrap,
  StyledSvgWhitePlus,
  StyledSvgDarkPlus,
} from '../../Button/AddColumnButton.styled';

export const AddColumnModal = ({ onCloseModal }) => {
  //   const handlerTitleColumn = evt => {
  //     evt.preventDefault();
  //   };

  return (
    <Main>
      <Section>
        <div>
          <AddColumnTitle>Add column</AddColumnTitle>

          <ModalCloseButton onClick={() => onClose()}>
            <StyledSvgClose>
              <use xlinkHref={`${sprite}#icon-x-close`}></use>
            </StyledSvgClose>
          </ModalCloseButton>

          <form onSubmit={handlerTitleColumn}>
            <AddColumnInput
              type="text"
              name="title"
              placeholder="Title"
              autoFocus
            />

            <AddColumnBtn type="submit">
              <IconWhiteWrap>
                <StyledSvgDarkPlus>
                  <use xlinkHref={`${sprite}#icon-plus`}></use>
                </StyledSvgDarkPlus>
              </IconWhiteWrap>
              Add
            </AddColumnBtn>
          </form>
        </div>
      </Section>
    </Main>
  );
};
