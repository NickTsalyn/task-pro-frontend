import React from 'react';

import sprite from '../../../images/icons.svg';

import { ModalCloseButton, ModalWrap, StyledSvgClose } from '../ColumnModal.styled';
import {
  AddColumnBtn,
  AddColumnInput,
  AddColumnTitle,
  IconWhiteWrap,
  StyledSvgDarkPlus,
} from 'components/Button/AddColumnButton.styled';
import { addColumn } from 'redux/columns/operations';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

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

// export const AddColumnModal = ({ isOpen, onClose, submitButton, children }) => {
//   return (
//     <Modal
//       isOpen={isOpen}
//       overlayClassName={'modal-overlay'}
//       // style={stylesModal}
//       className={'modal-content'}
//       closeTimeoutMS={300}
//       onRequestClose={() => onClose()}
//       ariaHideApp={false}
//     >
//       <ModalCloseButton onClick={() => onClose()}>
//         <StyledSvgClose>
//           <use xlinkHref={`${sprite}#icon-x-close`}></use>
//         </StyledSvgClose>
//       </ModalCloseButton>
//       {children}
//     </Modal>
//   );
// };

export const AddColumnModal = ({ onCloseModal }) => {
  const dispatch = useDispatch();
  const { boardId } = useParams();

  const handlerAddColumn = evt => {
    evt.preventDefault();
    const inputValue = evt.target.title.value.trim();
    if (inputValue !== '') {
      const newColumn = {
        title: inputValue,
        dashboardId: boardId,
      };

      dispatch(addColumn(newColumn));
      onCloseModal();
      console.log(inputValue);
      console.log(newColumn);
      return;
    }
    return;
  };

  return (
    <ModalWrap>
      <AddColumnTitle>Add column</AddColumnTitle>

      <ModalCloseButton onClick={onCloseModal}>
        <StyledSvgClose>
          <use xlinkHref={`${sprite}#icon-x-close`}></use>
        </StyledSvgClose>
      </ModalCloseButton>

      <form onSubmit={handlerAddColumn}>
        <AddColumnInput
          type="text"
          name="title"
          placeholder="Title"
          autoFocus
        />

        <AddColumnBtn type="submit">
          <IconWhiteWrap>
            <StyledSvgDarkPlus>
              <use xlinkHref={`${sprite}#icon-plus`}></use>
            </StyledSvgDarkPlus>
          </IconWhiteWrap>
          Add
        </AddColumnBtn>
      </form>
    </ModalWrap>
  );
};
