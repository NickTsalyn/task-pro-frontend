import { CardList } from 'components/CardList/CardList';
import sprite from '../../images/icons.svg';
// import { deleteColumn, editColumn } from '../../redux/columns/operations';
import {
  ColumnHeader,
  ColumnTitle,
  ColumnWrapper,
  EditBlock,
  EditButton,
  EditSVG,
} from './ColumnListItem.styled';


import { AddColumnButton } from 'components/Button/AddColumnButton';
// import { useDispatch } from 'react-redux';

export const ColumnListItem = ({column: { _id, title}}) => {    
  
  
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
         <ColumnTitle>{title}</ColumnTitle>
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
            {/* <CardList columnId={id}/> */}
            {/* <AddColumnButton/> */}
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
//       {/* <button>ButtonAddAnotherCard</button>                  */}
//       {/* </li>
//           ) }   */}
//     </ColumnWrapper>
//   );

};
