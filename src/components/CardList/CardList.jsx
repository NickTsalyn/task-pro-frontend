import { CardListItem } from "components/CardListItem/CardListItem";
import { ButtonAddCard, CardListStyled, CardListWrapper } from "./CardList.styled";
import Modal from 'react-modal';
import { useState } from 'react';
import { AddCard } from "components/AddCard/AddCard";

Modal.setAppElement('#root');

export const CardList = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

const openModal = () => {
  setIsModalOpen(true);
};

const closeModal = () => {
  setIsModalOpen(false);
};
    return(
        <CardListWrapper>
        <CardListStyled>
            <CardListItem/>
            {/* <CardListItem/>
            <CardListItem/>
            <CardListItem/>             */}
        </CardListStyled>
        <ButtonAddCard type="button" onClick = {openModal}>AddAnotherCard</ButtonAddCard>
        <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        overlayClassName={'modal-overlay'}
        className={'modal-content'}
        closeTimeoutMS={300}
      >
        <AddCard onCloseModal={closeModal} />
      </Modal>
        </CardListWrapper>
    )
};
