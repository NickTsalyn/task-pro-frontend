import React from 'react';
import sprite from '../../../images/icons.svg';
import { toastStyles } from '../../../ToasterOptions'

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
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export const EditColumnModal = ({ onCloseModal, column }) => {
  const {t} = useTranslation('global')
  const dispatch = useDispatch();

  // const handlerEditColumn = evt => {
  //   evt.preventDefault();
  //   const inputValue = evt.target.title.value.trim();
  //   if (inputValue !== '') {
  //     const newTitle = {
  //       title: { title: inputValue },
  //       id: column._id,
  //     };

  //     dispatch(editColumn(newTitle));
  //     onCloseModal();
  //     return;
  //   }
  //   return;
  // };

  const successToaster = () => {
    toast.success('You successfully edited column!', {
      icon: '👌',
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

 const handlerEditColumn = evt => {
   evt.preventDefault();

   try {
     const inputValue = evt.target.title.value.trim();

     if (inputValue !== '') {
       const newTitle = {
         title: { title: inputValue },
         id: column._id,
       };

       dispatch(editColumn(newTitle));
       onCloseModal();
       successToaster();
     }
   } catch (error) {
     errorToaster(error.message);
   }
 };

  return (
    <ModalWrap>
      <AddColumnTitle>{t('screenPage.render.modal.column.editTitle')}</AddColumnTitle>

      <ModalCloseButton onClick={onCloseModal}>
        <StyledSvgClose>
          <use xlinkHref={`${sprite}#icon-x-close`}></use>
        </StyledSvgClose>
      </ModalCloseButton>

      <form onSubmit={handlerEditColumn}>
        <AddColumnInput
          type="text"
          name="title"
          placeholder={t('screenPage.render.modal.column.input')}
          autoFocus
        />

        <AddColumnBtn type="submit">
          <IconWhiteWrap>
            <StyledSvgDarkPlus>
              <use xlinkHref={`${sprite}#icon-plus`}></use>
            </StyledSvgDarkPlus>
          </IconWhiteWrap>
          {t('screenPage.render.modal.card.editBtn')}
        </AddColumnBtn>
      </form>
    </ModalWrap>
  );
};
