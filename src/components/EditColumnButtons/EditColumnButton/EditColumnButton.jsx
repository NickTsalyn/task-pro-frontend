import React, { useState } from 'react';
import { EditColumnModal } from 'components/ColumnModal/EditColumnModal/EditColumnModal';

import Modal from 'react-modal';
import '../ColumnModal.css';

import sprite from '../../../images/icons.svg';
import { EditButton, EditSVG } from './EditColumnButton.styled';

export const EditColumnButton = ({ column }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <EditButton type="button" onClick={openModal}>
        <EditSVG>
          <use xlinkHref={`${sprite}#icon-pencil-01`} />
        </EditSVG>
      </EditButton>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        overlayClassName={'modal-overlay'}
        className={'modal-content'}
        closeTimeoutMS={300}
      >
        <EditColumnModal onCloseModal={closeModal} column={column} />
      </Modal>
    </>
  );
};
