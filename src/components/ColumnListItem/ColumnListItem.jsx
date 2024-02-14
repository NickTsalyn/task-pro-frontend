import sprite from '../../images/icons.svg';
import Modal from 'react-modal';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { toastStyles } from '../../ToasterOptions';
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
import { fetchTitle } from 'redux/tasks/operations';
import { EditColumnButton } from 'components/EditColumnButtons/EditColumnButton/EditColumnButton';
import { deleteColumn } from 'redux/columns/operations';
import { selectedTheme } from 'redux/auth/selectors';
import { useTranslation } from 'react-i18next';

Modal.setAppElement('#root');
export const ColumnListItem = ({ column }) => {
  const {t} = useTranslation('global')
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { _id } = column;

  const dispatch = useDispatch();  

  const currentTheme = useSelector(selectedTheme);
  console.log(currentTheme);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    dispatch(fetchTitle())
  }, [dispatch])
  
  
  // const dispatch = useDispatch();
  // const handlerEditColumn = (columnId, updatedData) => {
  //   dispatch(editColumn({ id: columnId, ...updatedData }));
  // };
  // const handlerDeleteColumn = columnId => {
  //   dispatch(deleteColumn(columnId));
  // };

  const successToaster = () => {
    toast.success('You successfully deleted column!', {
      icon: '👍',
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

  // const handlerDeleteColumn = () => {
  //   const columnId = _id;
  //   console.log(columnId);
  //   dispatch(deleteColumn(columnId));
  // };

  const handlerDeleteColumn = () => {
    try {
      const columnId = _id;
      console.log(columnId);
      dispatch(deleteColumn(columnId));
      successToaster();
    } catch (error) {
      errorToaster(error.message);
    }
  };
 

  return (
    <ColumnWrapper>
      <ColumnHeader>
        <ColumnTitle>{column.title}</ColumnTitle>
        <EditBlock>

          <EditColumnButton column={column} />

          <EditButton type="button" onClick={handlerDeleteColumn}>
            <EditSVG>
              <use xlinkHref={`${sprite}#icon-trash-04`} />
            </EditSVG>
          </EditButton>

        </EditBlock>
      </ColumnHeader>
      <CardList columnId={column._id} />
      {/* <AddColumnButton/> */}
      <AddAnotherCard onClick={openModal} type="submit">
        <AddCardSvgContainer>
          <AddCardButtonSvg>
            <use xlinkHref={`${sprite}#icon-plus`}></use>
          </AddCardButtonSvg>
        </AddCardSvgContainer>
        <AddCardSvgButtonText>{t('screenPage.render.addCard')}</AddCardSvgButtonText>
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
