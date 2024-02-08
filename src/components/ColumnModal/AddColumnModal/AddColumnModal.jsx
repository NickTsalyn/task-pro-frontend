import React, { useState } from 'react';
import Modal from 'react-modal';
import sprite from '../../../images/icons.svg';
import '../ColumnModal.css';
import {
  ModalCloseButton,
  StyledSvgClose,
  AddColumnTitle,
  AddColumnInput,
  AddColumnBtn,
  IconWhiteWrap,
  IconVioletWrap,
  StyledSvgWhitePlus,
  StyledSvgDarkPlus,
} from '../ColumnModal.styled';

// Modal.setAppElement('#root');

export const AddColumnModal = ({ isOpen, onClose, submitButton, children }) => {

 const [modalAddColumnIsOpen, setModalAddColumnIsOpen] = useState(false);
  //  const [modalEditColumnIsOpen, setModalEditColumnIsOpen] = useState(false);
   const handlerTitleColumn = evt => {
     evt.preventDefault();
   };

  return (
    <Modal
      isOpen={isOpen}
      overlayClassName={'modal-overlay'}
      className={'modal-content'}
      closeTimeoutMS={300}
      onRequestClose={() => onClose()}
      ariaHideApp={false}
    >
      <ModalCloseButton onClick={() => onClose()}>
        <StyledSvgClose>
          <use xlinkHref={`${sprite}#icon-x-close`}></use>
        </StyledSvgClose>
      </ModalCloseButton>

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

      {children}
    </Modal>
  );
};
