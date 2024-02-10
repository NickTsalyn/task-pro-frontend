
// import { ColumnListItem } from "components/ColumnListItem/ColumnListItem";
import { AddcolumnWrapper, ColumnListStyled, ColumnListWrapper } from "./ColumnList.styled";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { selectAllBoards } from "redux/boards/selectors";
// import { selectColumns } from "redux/columns/selectors";
import { 
    // deleteColumn, editColumn, 
    getColumsById } from "redux/columns/operations";
import { useEffect } from "react";
// import { ColumnHeader, ColumnTitle, ColumnWrapper, EditBlock, EditButton, EditSVG } from "components/ColumnListItem/ColumnListItem.styled";
// import { CardList } from "components/CardList/CardList";
import { AddColumnButton } from "components/Button/AddColumnButton";
// import sprite from '../../images/icons.svg';
import { selectColumns } from "redux/columns/selectors";
// import { CardList } from "components/CardList/CardList";
import { ColumnListItem } from "components/ColumnListItem/ColumnListItem";
import { ColumnTitle, ColumnWrapper } from "components/ColumnListItem/ColumnListItem.styled";
// import { ColumnTitle } from "components/ColumnListItem/ColumnListItem.styled";
export const ColumnList = () => {

  const {boardId} = useParams();

  const dispatch = useDispatch();
     useEffect(() => {
      
    dispatch(getColumsById(boardId))
      
    }, [boardId]);
    const columns = useSelector(selectColumns);//приходить масив колонок;
    // const { boardId } = useParams(); // Отримуємо динамічний параметр з URL
    // console.log(boardId);
    
    // const filteredColumns = columns.filter((column) => column.board === boardId);
    // console.log(filteredColumns);
  
  
    // const handlerEditColumn = (columnId, updatedData) => {
    //   dispatch(editColumn({ id: columnId, ...updatedData }));
    // };
    // const handlerDeleteColumn = columnId => {
    //   dispatch(deleteColumn(columnId));
    // };
    

    return(
        <ColumnListWrapper>
        <ColumnListStyled>  
           {columns.map(column => (
            <li key={column.id} >
                {/* <ColumnWrapper> */}
                {/* <ColumnTitle>{column.title}</ColumnTitle> */}


                {/* <CardList/> */}
                <ColumnListItem column={column}/>
                {/* </ColumnWrapper> */}
            </li>

           ))} 
                              
           
        </ColumnListStyled>
        
        <AddColumnButton/>
            
        </ColumnListWrapper>
    )
// =======
// import { ColumnListItem } from 'components/ColumnListItem/ColumnListItem';
// import { ColumnListStyled } from './ColumnList.styled';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import { getAllColumns } from '../../redux/columns/operations';
// import { selectColumns} from '../../redux/columns/selectors'

// // приходить масив колонок
// //список колонок
// export const ColumnList = () => {
//     const dispatch = useDispatch();
//     const columns = useSelector(selectColumns);

//     useEffect(() => {
//       dispatch(getAllColumns());
//     }, [dispatch]);

//   return (
//       <ColumnListStyled>
          
//      {columns.length > 0 && (
//       <ul>
//         {columns.map(column => (
//           <li key={column.id}>           
//             <ColumnListItem column={column}/>            
//          </li>
//         ))}
//       </ul>
//     )}

//       {/* <ColumnListItem/> 
//             <ColumnListItem/>                        */}

//     </ColumnListStyled>
//   );
// >>>>>>> main
};
