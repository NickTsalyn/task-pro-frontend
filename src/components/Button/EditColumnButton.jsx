import React, { useState } from 'react';
import Modal from 'react-modal';
import sprite from '../../images/icons.svg';
import '../../components/ColumnModal/ColumnModal.css';
import {
  ModalShowButton,
  IconVioletWrap,
  StyledSvgWhitePlus,
  ColumnModalWrapper,
} from '../Button/AddColumnButton.styled';
import { EditColumnModal } from '../../components/ColumnModal/EditColumnModal/EditColumnModal';

Modal.setAppElement('#root');

export const EditColumnButton = () => {
  const [modalEditColumnIsOpen, setModalEditColumnIsOpen] = useState(false);

  const openModal = () => {
    setModalEditColumnIsOpen(true);
  };

  const closeModal = () => {
    setModalEditColumnIsOpen(false);
  };

  return (
    <ColumnModalWrapper>
      <ModalShowButton type="button" onClick={openModal}>
        <IconVioletWrap>
          <StyledSvgWhitePlus>
            <use xlinkHref={`${sprite}#icon-plus`}></use>
          </StyledSvgWhitePlus>
        </IconVioletWrap>
        Edit column
      </ModalShowButton>

      <Modal
        isOpen={modalEditColumnIsOpen}
        overlayClassName={'modal-overlay'}
        className={'modal-content'}
        closeTimeoutMS={300}
        onRequestClose={closeModal}
        ariaHideApp={false}
      >
        <EditColumnModal onCloseModal={closeModal} />
      </Modal>
    </ColumnModalWrapper>
  );
};
