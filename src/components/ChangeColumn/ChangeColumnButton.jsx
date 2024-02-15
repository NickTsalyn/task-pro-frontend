import Modal from 'react-modal';
import { useState } from 'react';
import sprite from '../../images/icons.svg';
import { ChangeColumnModal } from './ChangeColumnModal';
import { ChangeButtonCard, StyledSVGChangeColumn } from './ChangeColumn.styled';

Modal.setAppElement('#root');

export const ChangeColumnButton = props => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { id, filteredColumns } = props;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <ChangeButtonCard type="button" onClick={openModal}>
        <StyledSVGChangeColumn>
          <use xlinkHref={`${sprite}#icon-active`}></use>
        </StyledSVGChangeColumn>
      </ChangeButtonCard>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        overlayClassName={'modal-overlay'}
        className={'modal-content'}
        closeTimeoutMS={300}
      >
        <ChangeColumnModal taskId={id} columns={filteredColumns} />
      </Modal>
    </div>
  );
};
