import React from 'react';
import Modal from 'react-modal';
import sprite from '../../../images/icons.svg';
import '../ColumnModal.css';
import { ModalCloseButton, StyledSvgClose } from '../ColumnModal.styled';

// Modal.setAppElement('#root');

export const AddColumnModal = ({ isOpen, onClose, submitButton, children }) => {
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
        {children}
     
      </Modal>
    
  );
};
