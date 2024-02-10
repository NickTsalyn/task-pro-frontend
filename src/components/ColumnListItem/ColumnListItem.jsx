import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { deleteColumn} from '../../redux/columns/operations';
// import { selectColumns } from '../../redux/columns/selectors';
import Modal from 'react-modal';
import { CardList } from 'components/CardList/CardList';
import sprite from '../../images/icons.svg';

import {
  ColumnHeader,
  ColumnTitle,
  ColumnWrapper,
  EditBlock,
  EditButton,
  EditSVG,
} from './ColumnListItem.styled';
import '../../components/ColumnModal/ColumnModal.css';

import { EditColumnModal } from '../../components/ColumnModal/EditColumnModal/EditColumnModal';

Modal.setAppElement('#root');

export const ColumnListItem = ({ column: { id, title } }) => {
  const dispatch = useDispatch();
  // const columns = useSelector(selectColumns);

  const [modalEditColumnIsOpen, setModalEditColumnIsOpen] = useState(false);

  const openModal = () => {
    setModalEditColumnIsOpen(true);
  };

  const closeModal = () => {
    setModalEditColumnIsOpen(false);
  };

  // const toEditColumn = async (columnId, updatedData) => {
  //   try {
  //     await dispatch(editColumn({ id: columnId, updatedData }));
  //     successToaster();
  //   } catch (error) {
  //     errorToaster(error.message);
  //   }
  // };

  const toDeleteColumn = async columnId => {
    try {
      await dispatch(deleteColumn(columnId));
      successToaster();
    } catch (error) {
      errorToaster(error.message);
    }
  };

  const successToaster = () => {
    toast.success("It's success! Congratulations!", {
      position: 'top-right',
      duration: 4000,
      style: {
        background: 'green',
        color: '#fff',
      },
    });
  };

  const errorToaster = error => {
    toast.error(`Ooops.... It's ${error} error`, {
      position: 'top-right',
      duration: 4000,
      style: {
        background: 'red',
        color: '#fff',
      },
    });
  };

  // const columns = [];
  // const title = ' Column Title';

  return (
    <ColumnWrapper>
      <ColumnHeader>
        <ColumnTitle>{title}</ColumnTitle>
        <EditBlock>
          <EditButton type="button" onClick={openModal}>
            <EditSVG>
              <use xlinkHref={`${sprite}#icon-pencil-01`} />
            </EditSVG>
          </EditButton>
          <EditButton type="button" onClick={() => toDeleteColumn(id)}>
            <EditSVG>
              <use xlinkHref={`${sprite}#icon-trash-04`} />
            </EditSVG>
          </EditButton>
        </EditBlock>
      </ColumnHeader>
      {/* {columns.map(column =>
            <li key={column.id}> */}
      <CardList />
      {/* <button>ButtonAddAnotherCard</button>                  */}
      {/* </li>
          ) }   */}
      <Modal
        isOpen={modalEditColumnIsOpen}
        overlayClassName={'modal-overlay'}
        className={'modal-content'}
        closeTimeoutMS={300}
        onRequestClose={closeModal}
        ariaHideApp={false}
      >
        <EditColumnModal onCloseModal={closeModal} />
      </Modal>
      <Toaster />
    </ColumnWrapper>
  );
};