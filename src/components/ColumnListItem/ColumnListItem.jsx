import sprite from '../../images/icons.svg';
import Modal from 'react-modal';
import { useState } from 'react';
import {
  ColumnHeader,
  ColumnTitle,
  ColumnWrapper,
  EditBlock,
  EditButton,
  EditSVG,
} from './ColumnListItem.styled';

import { AddCard } from 'components/AddCard/AddCard';
import { CardList } from 'components/CardList/CardList';
// import { useDispatch } from 'react-redux';
Modal.setAppElement('#root');
export const ColumnListItem = ({column}) => {    
  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log(column);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  
  // const dispatch = useDispatch();
  // const handlerEditColumn = (columnId, updatedData) => {
  //   dispatch(editColumn({ id: columnId, ...updatedData }));
  // };
  // const handlerDeleteColumn = columnId => {
  //   dispatch(deleteColumn(columnId));
  // };
    return(
        <ColumnWrapper>
         <ColumnHeader>
         <ColumnTitle>{column.title}</ColumnTitle>
          <EditBlock>
            <EditButton type="button" 
            // onClick={() => handlerEditColumn(id)}
            >
              <EditSVG>
                <use xlinkHref={`${sprite}#icon-pencil-01`}/>
              </EditSVG>
            </EditButton>
            <EditButton type="button" 
            // onClick={() => handlerDeleteColumn(id)}
            >
              <EditSVG>
                <use xlinkHref={`${sprite}#icon-trash-04`}/>
              </EditSVG>
            </EditButton>
          </EditBlock>
         </ColumnHeader>          
            <CardList columnId={column._id}/>
            {/* <AddColumnButton/> */}
            <button  onClick={openModal}>AddAnotherCard</button>  


            <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        overlayClassName={'modal-overlay'}
        className={'modal-content'}
        closeTimeoutMS={300}
      >
        <AddCard onCloseModal={closeModal} id={column._id}/>
      </Modal> 
        </ColumnWrapper>      
      );
};
