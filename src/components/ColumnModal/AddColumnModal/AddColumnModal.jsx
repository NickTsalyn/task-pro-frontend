import React from 'react';
import toast from 'react-hot-toast';
import { toastStyles } from '../../../ToasterOptions';

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
import { addColumn } from 'redux/columns/operations';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

export const AddColumnModal = ({ onCloseModal }) => {
  const dispatch = useDispatch();
  const { boardId } = useParams();
  console.log(boardId);

  // const handlerAddColumn = evt => {
  //   evt.preventDefault();
  //   const inputValue = evt.target.title.value.trim();
  //   if (inputValue !== '') {
  //     const newColumn = {
  //       title: inputValue,
  //       dashboardId: boardId,
  //     };

  //     dispatch(addColumn(newColumn));
  //     onCloseModal();
  //     return;
  //   }
  //   return;
  // };

  const successToaster = () => {
    toast.success('You successfully added new column!', {
      icon: '👏',
      duration: 4000,
      style: toastStyles.success,
      // {
      //   background: 'green',
      //   color: '#fff',
      // },
    });
  };

  const errorToaster = error => {
    toast.error(`Something went wrong! It's ${error} error`, {
      icon: '🤔',
      duration: 4000,
      style: toastStyles.error,
      // {
      //   background: 'red',
      //   color: '#fff',
      // },
    });
  };

  const handlerAddColumn = evt => {
    evt.preventDefault();

    try {
      const inputValue = evt.target.title.value.trim();

      if (inputValue !== '') {
        const newColumn = {
          title: inputValue,
          dashboardId: boardId,
        };

        dispatch(addColumn(newColumn));
        onCloseModal();
        successToaster();
      }
    } catch (error) {
      errorToaster(error.message);
    }
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
