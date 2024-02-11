import React from 'react';
import Modal from 'react-modal';
import sprite from '../../../images/icons.svg';
import '../ColumnModal.css';
import { ModalCloseButton, StyledSvgClose } from '../ColumnModal.styled';


// Modal.setAppElement('#root');

// const stylesModal = {
//   position: 'relative',
//   width: '100%',
//   height: 'fit-content',
//   maxHeight: '433px',
//   maxWidth: '350px',
//   // backgroundColor: ${props => props.theme.colors.white},
//   // border-radius: '8px'
//   // box-shadow: '0px 4px 16px 0px' ${props => props.theme.colors.greyIconColor};
//   // transition: transform 0.3s;
// }

export const AddColumnModal = ({ isOpen, onClose, submitButton, children }) => {
  
  return (
    <Modal
      isOpen={isOpen}
      overlayClassName={'modal-overlay'}
      // style={stylesModal}
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
