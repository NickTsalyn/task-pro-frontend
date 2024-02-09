import React, { useState } from 'react';
import Modal from 'react-modal';
import sprite from '../../../src/images/icons.svg';
import '../../components/ColumnModal/ColumnModal.css';
import {
  ModalCloseButton,
  StyledSvgClose,
} from '../ColumnModal/ColumnModal.styled';
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
import { ColumnModal} from '../ColumnModal/ColumnModal'

Modal.setAppElement('#root');

export const AddColumnModal = ({ isOpen, onClose, submitButton, children }) => {
  const [modalAddColumnIsOpen, setModalAddColumnIsOpen] = useState(false);
  //  const [modalEditColumnIsOpen, setModalEditColumnIsOpen] = useState(false);
//   const handlerTitleColumn = evt => {
    //     evt.preventDefault();
    const openModal = () => {
    setModalAddColumnIsOpen(true);
  };

  const closeModal = () => {
    setModalAddColumnIsOpen(false);
  };

return (
      <Main>
      <Section>
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
            
    <Modal
      isOpen={isOpen}
      overlayClassName={'modal-overlay'}
      className={'modal-content'}
      closeTimeoutMS={300}
      onRequestClose={() => onClose()}
      ariaHideApp={false}
            >
                <ColumnModal onCloseModal={closeModal} />
    </Modal>
    
              </Section>
    </Main>
  );
};
