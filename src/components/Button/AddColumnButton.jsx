import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddColumnModal } from '../ColumnModal/AddColumnModal/AddColumnModal';
// import { useDispatch } from 'react-redux';
// import toast, { Toaster } from 'react-hot-toast';
// import { EditColumnModal } from '../ColumnModal/EditColumnModal/EditColumnModal';
import Modal from 'react-modal';
import '../ColumnModal/ColumnModal.css';

import sprite from '../../images/icons.svg';
import {
  ModalShowButton,
   IconVioletWrap,
  StyledSvgWhitePlus,
  } from '../Button/AddColumnButton.styled';

export const AddColumnButton = ({ columnId }) => {
  // const handlerValue = ({ target }) => setEditColumnValue(target.value);

  // const handlerEditColumn = evt => {
  //   evt.preventDefault();
  //   const updatedTitle = evt.target.elements.title.value;

  //   if (updatedTitle.trim() !== '') {
  //     dispatch(editColumn({ id: columnId, title: updatedTitle }));
  //     setModalEditColumnIsOpen(false);
  //     return;
  //   }
  //   return;
  // };


  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
    // це сама кнопка ADD Column
    <>
      <ModalShowButton
        type="submit"
        onClick={openModal}
      >
        <IconVioletWrap>
          <StyledSvgWhitePlus>
            <use xlinkHref={`${sprite}#icon-plus`}></use>
          </StyledSvgWhitePlus>
        </IconVioletWrap>
        Add another column
      </ModalShowButton>

      {/* це кнопка Edit Column, вона повинна бути не тут */}
      {/* <ModalShowButton onClick={() => setModalEditColumnIsOpen(true)}>
        <IconVioletWrap>
          <StyledSvgWhitePlus>
            <use xlinkHref={`${sprite}#icon-plus`}></use>
          </StyledSvgWhitePlus>
        </IconVioletWrap>
        Edit Column
      </ModalShowButton> */}

      {/* це модалка ADD Column*/}
      {/* <AddColumnModal
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
      </AddColumnModal> */}

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        overlayClassName={'modal-overlay'}
        className={'modal-content'}
        closeTimeoutMS={300}
      >
        <AddColumnModal onCloseModal={closeModal} />
      </Modal>

      {/* Це модалка EditColumn */}
      {/* <EditColumnModal
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
      </EditColumnModal> */}
    </>
  );
};
