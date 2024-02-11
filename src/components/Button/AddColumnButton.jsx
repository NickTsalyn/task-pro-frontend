import React, { useState } from 'react';
import Modal from 'react-modal';
import sprite from '../../images/icons.svg';
import '../../components/ColumnModal/ColumnModal.css';
import {
  ModalShowButton,
  IconVioletWrap,
  StyledSvgWhitePlus,
  ColumnModalWrapper,
} from './AddColumnButton.styled';
import { AddColumnModal } from '../ColumnModal/AddColumnModal/AddColumnModal';

Modal.setAppElement('#root');

export const AddColumnButton = () => {
  const [modalAddColumnIsOpen, setModalAddColumnIsOpen] = useState(false);

  const openModal = () => {
    setModalAddColumnIsOpen(true);
  };

  const closeModal = () => {
    setModalAddColumnIsOpen(false);
  };

  return (
    <ColumnModalWrapper>
      <ModalShowButton type="button" onClick={openModal}>
        <IconVioletWrap>
          <StyledSvgWhitePlus>
            <use xlinkHref={`${sprite}#icon-plus`}></use>
          </StyledSvgWhitePlus>
        </IconVioletWrap>
        Add another column
      </ModalShowButton>

      <Modal
        isOpen={modalAddColumnIsOpen}
        overlayClassName={'modal-overlay'}
        className={'modal-content'}
        closeTimeoutMS={300}
        onRequestClose={closeModal}
        ariaHideApp={false}
      >
        <AddColumnModal onCloseModal={closeModal} />
      </Modal>
    </ColumnModalWrapper>
  );
};
