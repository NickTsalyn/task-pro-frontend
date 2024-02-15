import React, { useState } from 'react';
import { AddColumnModal } from '../../ColumnModal/AddColumnModal/AddColumnModal';

import Modal from 'react-modal';
import '../ColumnModal.css';

import sprite from '../../../images/icons.svg';
import {
  ModalShowButton,
  IconVioletWrap,
  StyledSvgWhitePlus,
} from './AddColumnButton.styled';
import { useTranslation } from 'react-i18next';

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
        className={'modal-content'}
        closeTimeoutMS={300}
      >
        <AddColumnModal onCloseModal={closeModal} column={column} />
      </Modal>
    </>
  );
};
