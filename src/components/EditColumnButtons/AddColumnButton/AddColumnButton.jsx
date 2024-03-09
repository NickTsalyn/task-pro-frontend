import React, { useState } from 'react';
import { AddColumnModal } from '../../ColumnModal/AddColumnModal/AddColumnModal';

import Modal from 'react-modal';

import sprite from '../../../images/icons.svg';
import {
  ModalShowButton,
  IconVioletWrap,
  StyledSvgWhitePlus,
} from './AddColumnButton.styled';
import { useTranslation } from 'react-i18next';

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

export const AddColumnButton = ({ column }) => {
  const { t } = useTranslation('global');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <ModalShowButton type="submit" onClick={openModal}>
        <IconVioletWrap>
          <StyledSvgWhitePlus>
            <use xlinkHref={`${sprite}#icon-plus`}></use>
          </StyledSvgWhitePlus>
        </IconVioletWrap>
        {t('screenPage.render.addColumn')}
      </ModalShowButton>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        overlayClassName={'modal-overlay'}
        closeTimeoutMS={300}
        style={customStyles}
      >
        <AddColumnModal onCloseModal={closeModal} column={column} />
      </Modal>
    </>
  );
};
