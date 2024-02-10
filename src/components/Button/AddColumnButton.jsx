import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import toast, { Toaster } from 'react-hot-toast';
import { AddColumnModal } from '../ColumnModal/AddColumnModal/AddColumnModal';
import { EditColumnModal } from '../ColumnModal/EditColumnModal/EditColumnModal';
import sprite from '../../images/icons.svg';
import {
  addColumn,
  // deleteColumn,
  editColumn,
} from '../../redux/columns/operations';

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

export const AddColumnButton = ({ columnId }) => {
  const [modalAddColumnIsOpen, setModalAddColumnIsOpen] = useState(false);
  const [modalEditColumnIsOpen, setModalEditColumnIsOpen] = useState(false);
  const [editColumnValue, setEditColumnValue] = useState('');

  const dispatch = useDispatch();

  const handlerAddColumn = evt => {
    evt.preventDefault();
    const inputValue = evt.target.title.value.trim();
    if (inputValue !== '') {
      const newColumn = {
        title: inputValue,
      };
      dispatch(addColumn(newColumn));
      setModalAddColumnIsOpen(false);
      return;
    }
    return;
  };

  const handlerValue = ({ target }) => setEditColumnValue(target.value);

  const handlerEditColumn = evt => {
    evt.preventDefault();
    const updatedTitle = evt.target.elements.title.value;

    if (updatedTitle.trim() !== '') {
      dispatch(editColumn({ id: columnId, title: updatedTitle }));
      setModalEditColumnIsOpen(false);
      return;
    }
    return;
  };

  // const handlerDeleteColumn = columnId => {
  //   dispatch(deleteColumn(columnId));
  // };

  // export const handlerColumn = ({ column: { id, title, owner } }) => {
  // const dispatch = useDispatch();
  // const handlerEditColumn = (columnId, updatedData) => {
  //   dispatch(editColumn({ id: columnId, ...updatedData }));
  // };
  // const handlerDeleteColumn = columnId => {
  //   dispatch(deleteColumn(columnId));
  // };

  return (
    // <Main>
      // <Section>
      <>
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
            <form onSubmit={handlerAddColumn}>
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
            <form onSubmit={handlerEditColumn}>
              <AddColumnInput
                type="text"
                name="title"
                placeholder="To Do"
                value={editColumnValue}
                onChange={handlerValue}
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
        </>
      // </Section>
    // </Main>
  );
};
