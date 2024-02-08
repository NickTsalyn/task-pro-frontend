import styled from 'styled-components';
import sprite from '../../../images/icons.svg';
import { StyledLogoIcon, StyledLogoText, StyledLogoWrapper } from './Logo.styled';
import Modal from 'react-modal';
import { useState } from 'react';
import { AddCard } from 'components/AddCard/AddCard';

Modal.setAppElement('#root');


const StyledSVG = styled.svg`
fill:  ${p => p.theme.violetColors.accentColor};
  /* stroke: yellow; */
  /* background-color:white; */
  /* width: 12px;
  height: 16px; */

`;

export const Logo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

const openModal = () => {
  setIsModalOpen(true);
};

const closeModal = () => {
  setIsModalOpen(false);
};
    return (
        <StyledLogoWrapper>
         <StyledLogoIcon>
            <StyledSVG>
        <use xlinkHref={`${sprite}#icon-logo2`}></use>
      </StyledSVG>
      </StyledLogoIcon>
     
            <StyledLogoText>Task Pro</StyledLogoText>
            <button type='button' onClick = {openModal}></button>
            <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        overlayClassName={'modal-overlay'}
        className={'modal-content'}
        closeTimeoutMS={300}
      >
        <AddCard onCloseModal={closeModal} />
      </Modal>
        </StyledLogoWrapper>
    );
}