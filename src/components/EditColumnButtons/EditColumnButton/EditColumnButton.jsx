import React, { useState } from 'react';
import { EditColumnModal } from 'components/ColumnModal/EditColumnModal/EditColumnModal';

import Modal from 'react-modal';

import sprite from '../../../images/icons.svg';
import { EditButton, EditSVG } from './EditColumnButton.styled';

const customStyles = {
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0',
    border: 'none',
  },
};

Modal.setAppElement('#root');

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

      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          overlayClassName={'modal-overlay'}
          closeTimeoutMS={300}
          style={customStyles}
        >
          <EditColumnModal onCloseModal={closeModal} column={column} />
        </Modal>
      )}
    </>
  );
};
