import { useDispatch } from 'react-redux';
// import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { editColumn, deleteColumn } from '../../redux/columns/operations';
// import Modal from 'react-modal';
import sprite from '../../images/icons.svg';
import '../../components/ColumnModal/ColumnModal.css';
import { EditColumnModal } from '../../components/ColumnModal/EditColumnModal/EditColumnModal';
import {
  AddColumnTitle,
  AddColumnInput,
  AddColumnBtn,
  IconWhiteWrap,
  StyledSvgDarkPlus,
} from '../Button/AddColumnButton.styled';

import {
  ColumnHeader,
  ColumnTitle,
  ColumnWrapper,
  EditBlock,
  EditButton,
  EditSVG,
} from './ColumnListItem.styled';

export const ColumnListItem = ({ column}) => {
  const dispatch = useDispatch();
  const [modalEditColumnIsOpen, setModalEditColumnIsOpen] = useState(false);
  const [editColumnValue, setEditColumnValue] = useState('');

  const openModal = () => {
    setModalEditColumnIsOpen(true);
  };

  // const closeModal = () => {
  //   setModalEditColumnIsOpen(false);
  // };

  const handlerValue = ({ target }) => setEditColumnValue(target.value);

  const handlerEditColumn = evt => {
    evt.preventDefault();
    // const updatedTitle = evt.target.elements.title.value;
     const updatedTitle = evt.target.value;

    // if (updatedTitle.trim() !== '') {
    if (updatedTitle !== '') {
      dispatch(editColumn({ columnId: column._id, updatedTitle: column.title }));
      setModalEditColumnIsOpen(false);
      return;
    }
    return;
  };

  // const handlerEditColumn = async (columnId, updatedData) => {
  //   try {
  //     await dispatch(editColumn({ id: columnId, updatedData }));
  //     successToaster();
  //   } catch (error) {
  //     errorToaster(error.message);
  //   }
  // };

  const handlerDeleteColumn = async columnId => {
    try {
      await dispatch(deleteColumn(columnId));
      successToaster();
    } catch (error) {
      errorToaster(error.message);
    }
  };


  const successToaster = () => {
    toast.success('Woh! Well done!', {
      position: 'top-right',
      duration: 4000,
      style: {
        background: 'green',
        color: '#fff',
      },
    });
  };

  const errorToaster = error => {
    toast.error(`Something went wrong! It's ${error} error`, {
      position: 'top-right',
      duration: 4000,
      style: {
        background: 'red',
        color: '#fff',
      },
    });
  };

  return (
    <ColumnWrapper>
      <ColumnHeader>
        <ColumnTitle>{column.title}</ColumnTitle>
        <EditBlock>
          <EditButton type="button" onClick={openModal}>
            <EditSVG>
              <use xlinkHref={`${sprite}#icon-pencil-01`} />
            </EditSVG>
          </EditButton>
          <EditButton
            type="button"
            onClick={handlerDeleteColumn}
            // onClick={() => handlerDeleteColumn(columnId)}

          >
            <EditSVG>
              <use xlinkHref={`${sprite}#icon-trash-04`} />
            </EditSVG>
          </EditButton>
        </EditBlock>
      </ColumnHeader>
      {/* <CardList columnId={_id}/> */}
      {/* <ButtonAddCard/> */}
      <EditColumnModal
        isOpen={modalEditColumnIsOpen}
        onClose={() => setModalEditColumnIsOpen(false)}
        submitButton="Add"
      >
        <div>
          <AddColumnTitle>Edit column</AddColumnTitle>
          <form onSubmit={handlerEditColumn}>
            <AddColumnInput
              type="text"
              name="title"
              placeholder="To Do"
              value={editColumnValue}
              onChange={handlerValue}
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
        </div>
      </EditColumnModal>
      <Toaster />
    </ColumnWrapper>
  );
};
