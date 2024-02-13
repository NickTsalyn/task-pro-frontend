import { useDispatch } from 'react-redux';
// import { useParams } from 'react-router-dom';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { editColumn, deleteColumn } from '../../redux/columns/operations';
import '../../components/ColumnModal/ColumnModal.css';
import { EditColumnModal } from '../../components/ColumnModal/EditColumnModal/EditColumnModal';
import {
  AddColumnTitle,
  AddColumnInput,
  AddColumnBtn,
  IconWhiteWrap,
  StyledSvgDarkPlus,
} from '../Button/AddColumnButton.styled';

import sprite from '../../images/icons.svg';
import Modal from 'react-modal';
import { useEffect, useState } from 'react';

import {
  ColumnHeader,
  ColumnTitle,
  ColumnWrapper,
  EditBlock,
  EditButton,
  EditSVG,
} from './ColumnListItem.styled';

import {
  AddAnotherCard,
  AddCardButtonSvg,
  AddCardSvgButtonText,
  AddCardSvgContainer,
} from 'components/AddCard/AddCard.styled';
import { CardList } from 'components/CardList/CardList';
import { AddCard } from 'components/AddCard/AddCard';
import { useDispatch, useSelector } from 'react-redux';
import { selectTasks } from 'redux/tasks/selectors';
import { fetchTitle } from 'redux/tasks/operations';

Modal.setAppElement('#root');


export const ColumnListItem = ({ column }) => {
  const [modalEditColumnIsOpen, setModalEditColumnIsOpen] = useState(false);
  const [editColumnValue, setEditColumnValue] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);
  // console.log(column);
  console.log(tasks);

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

  
  useEffect(() => {
    dispatch(fetchTitle())
  }, [dispatch])
  
  return (
    <ColumnWrapper>
      <ColumnHeader>
        <ColumnTitle>{column.title}</ColumnTitle>
        <EditBlock>
          <EditButton
            type="button"
            onClick={openModal}
          >
            <EditSVG>
              <use xlinkHref={`${sprite}#icon-pencil-01`} />
            </EditSVG>
          </EditButton>
          <EditButton
            type="button"
            onClick={handlerDeleteColumn}
            // onClick={() => handlerDeleteColumn(columnId)}
            // onClick={() => handlerDeleteColumn(id)}
          >
            <EditSVG>
              <use xlinkHref={`${sprite}#icon-trash-04`} />
            </EditSVG>
          </EditButton>
        </EditBlock>
      </ColumnHeader>
      <CardList columnId={column._id} />
      {/* <AddColumnButton/> */}

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

      <AddAnotherCard onClick={openModal} type="submit">
        <AddCardSvgContainer>
          <AddCardButtonSvg>
            <use xlinkHref={`${sprite}#icon-plus`}></use>
          </AddCardButtonSvg>
        </AddCardSvgContainer>
        <AddCardSvgButtonText>Add</AddCardSvgButtonText>
      </AddAnotherCard>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        overlayClassName={'modal-overlay'}
        className={'modal-content'}
        closeTimeoutMS={300}
      >
        <AddCard onCloseModal={closeModal} id={column._id} />
      </Modal>
    </ColumnWrapper>
  );
};
