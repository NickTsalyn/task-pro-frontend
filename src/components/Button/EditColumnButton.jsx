import React, { useState } from 'react';
import Modal from 'react-modal';
import sprite from '../../images/icons.svg';
import '../../components/ColumnModal/ColumnModal.css';
import {
  Main,
  ModalShowButton,
  IconVioletWrap,
  StyledSvgWhitePlus,
} from '../Button/AddColumnButton.styled';
import { EditColumnModal } from '../../components/ColumnModal/EditColumnModal/EditColumnModal';

Modal.setAppElement('#root');

export const EditColumnButton = ({
  isOpen,
  onClose,
  submitButton,
  children,
}) => {
  const [modalEditColumnIsOpen, setModalEditColumnIsOpen] = useState(false);

  const openModal = () => {
    setModalEditColumnIsOpen(true);
  };

  const closeModal = () => {
    setModalEditColumnIsOpen(false);
  };

  return (
    <Main>
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
    </Main>
  );
};
