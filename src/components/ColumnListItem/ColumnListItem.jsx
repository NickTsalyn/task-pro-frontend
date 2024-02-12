import sprite from '../../images/icons.svg';
import Modal from 'react-modal';
import { useState } from 'react';
// import { deleteColumn, editColumn } from '../../redux/columns/operations';
import {
  ColumnHeader,
  ColumnTitle,
  ColumnWrapper,
  EditBlock,
  EditButton,
  EditSVG,
} from './ColumnListItem.styled';

// import { AddColumnButton } from 'components/Button/AddColumnButton';
import { AddCard } from 'components/AddCard/AddCard';
// import { useDispatch } from 'react-redux';
Modal.setAppElement('#root');
export const ColumnListItem = ({ column: { _id, title } }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
  return (
    <ColumnWrapper>
      <ColumnHeader>
        <ColumnTitle>{title}</ColumnTitle>
        <EditBlock>
          <EditButton
            type="button"
            // onClick={() => handlerEditColumn(id)}
          >
            <EditSVG>
              <use xlinkHref={`${sprite}#icon-pencil-01`} />
            </EditSVG>
          </EditButton>
          <EditButton
            type="button"
            // onClick={() => handlerDeleteColumn(id)}
          >
            <EditSVG>
              <use xlinkHref={`${sprite}#icon-trash-04`} />
            </EditSVG>
          </EditButton>
        </EditBlock>
      </ColumnHeader>
      {/* <CardList columnId={id}/> */}
      {/* <AddColumnButton/> */}
      <button onClick={openModal}>AddAnotherCard</button>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        overlayClassName={'modal-overlay'}
        className={'modal-content'}
        closeTimeoutMS={300}
      >
        <AddCard onCloseModal={closeModal} />
      </Modal>
    </ColumnWrapper>
  );

  // import {
  //   ColumnHeader,
  //   ColumnTitle,
  //   ColumnWrapper,
  //   EditBlock,
  //   EditButton,
  //   EditSVG,
  // } from './ColumnListItem.styled';

  // export const ColumnListItem = ({ column: { id, title, owner } }) => {
  //   const dispatch = useDispatch();
  //   const handlerEditColumn = (columnId, updatedData) => {
  //     dispatch(editColumn({ id: columnId, ...updatedData }));
  //   };
  //   const handlerDeleteColumn = columnId => {
  //     dispatch(deleteColumn(columnId));
  //   };

  //   // const dispatch = useDispatch();
  //   // const items = useSelector(selectColumns);
  //   // const columns = [];
  //   // const title = ' Column Title';

  //   return (
  //     <ColumnWrapper>
  //       <ColumnHeader>
  //         <ColumnTitle>{title}</ColumnTitle>
  //         <EditBlock>
  //           <EditButton type="button" onClick={() => handlerEditColumn(id)}>
  //             <EditSVG>
  //               <use xlinkHref={`${sprite}#icon-pencil-01`} />
  //             </EditSVG>
  //           </EditButton>
  //           <EditButton type="button" onClick={() => handlerDeleteColumn(id)}>
  //             <EditSVG>
  //               <use xlinkHref={`${sprite}#icon-trash-04`} />
  //             </EditSVG>
  //           </EditButton>
  //         </EditBlock>
  //       </ColumnHeader>
  //       {/* {columns.map(column =>
  //             <li key={column.id}> */}
  //       <CardList />
  //       {/* <button  onClick={openModal}>ButtonAddAnotherCard</button>                  */}
  //       {/* </li>
  //           ) }   */}
  // {
    /* <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        overlayClassName={'modal-overlay'}
        className={'modal-content'}
        closeTimeoutMS={300}
      >
        <AddCard onCloseModal={closeModal} />
      </Modal> */
  // }
  //     </ColumnWrapper>
  //   );
};
