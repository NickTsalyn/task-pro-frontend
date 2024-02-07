import React, { useState } from 'react';
import { AddColumnModal } from '../ColumnModal/AddColumnModal/AddColumnModal';
import { EditColumnModal } from '../ColumnModal/EditColumnModal/EditColumnModal';
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
} from '../Button/AddColumnButton.styled';

export const AddColumnButton = () => {
  const [modalAddColumnIsOpen, setModalAddColumnIsOpen] = useState(false);
  const [modalEditColumnIsOpen, setModalEditColumnIsOpen] = useState(false);

  const handlerTitleColumn = evt => {
    evt.preventDefault();
  };

  return (
    <Main>
      <Section>
        <ModalShowButton
          type="submit"
          onClick={() => setModalAddColumnIsOpen(true)}
        >
          <IconVioletWrap>
            <StyledSvgWhitePlus>
              <use xlinkHref={`${sprite}#icon-plus`}></use>
            </StyledSvgWhitePlus>
          </IconVioletWrap>
          Add another column
        </ModalShowButton>

        <ModalShowButton onClick={() => setModalEditColumnIsOpen(true)}>
          <IconVioletWrap>
            <StyledSvgWhitePlus>
              <use xlinkHref={`${sprite}#icon-plus`}></use>
            </StyledSvgWhitePlus>
          </IconVioletWrap>
          Edit Column
        </ModalShowButton>

        <AddColumnModal
          isOpen={modalAddColumnIsOpen}
          onClose={() => setModalAddColumnIsOpen(false)}
          submitButton="Add"
        >
          <div>
            <AddColumnTitle>Add column</AddColumnTitle>
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
        </AddColumnModal>

        <EditColumnModal
          isOpen={modalEditColumnIsOpen}
          onClose={() => setModalEditColumnIsOpen(false)}
          submitButton="Add"
        >
          <div>
            <AddColumnTitle>Edit column</AddColumnTitle>
            <form onSubmit={handlerTitleColumn}>
              <AddColumnInput
                type="text"
                name="title"
                placeholder="To Do"
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
        </EditColumnModal>
      </Section>
    </Main>
  );
};
