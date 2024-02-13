import React from 'react';
import sprite from '../../../images/icons.svg';

import {
  ModalCloseButton,
  ModalWrap,
  StyledSvgClose,
} from '../ColumnModal.styled';
import {
  AddColumnBtn,
  AddColumnInput,
  AddColumnTitle,
  IconWhiteWrap,
  StyledSvgDarkPlus,
} from 'components/EditColumnButtons/AddColumnButton/AddColumnButton.styled';
import { editColumn } from 'redux/columns/operations';
import { useDispatch } from 'react-redux';

export const EditColumnModal = ({ onCloseModal, column }) => {
  const dispatch = useDispatch();
  
  const handlerEditColumn = evt => {
    evt.preventDefault();
    const inputValue = evt.target.title.value.trim();
    if (inputValue !== '') {
      const newTitle = {
        title: { title: inputValue },
        id: column._id,
      };

      dispatch(editColumn(newTitle));
      onCloseModal();
      return;
    }
    return;
  };

  return (
    <ModalWrap>
      <AddColumnTitle>Edit column</AddColumnTitle>

      <ModalCloseButton onClick={onCloseModal}>
        <StyledSvgClose>
          <use xlinkHref={`${sprite}#icon-x-close`}></use>
        </StyledSvgClose>
      </ModalCloseButton>

      <form onSubmit={handlerEditColumn}>
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
          Edit
        </AddColumnBtn>
      </form>
    </ModalWrap>
  );
};
