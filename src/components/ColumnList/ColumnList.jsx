// import { ColumnListItem } from "components/ColumnListItem/ColumnListItem";
import { ColumnListStyled } from "./ColumnList.styled";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { selectAllBoards } from "redux/boards/selectors";
// import { selectColumns } from "redux/columns/selectors";
import { deleteColumn, editColumn, getColumsById } from "redux/columns/operations";
import { useEffect } from "react";
import { ColumnHeader, ColumnTitle, ColumnWrapper, EditBlock, EditButton, EditSVG } from "components/ColumnListItem/ColumnListItem.styled";
import { CardList } from "components/CardList/CardList";
import { AddColumnButton } from "components/Button/AddColumnButton";
import sprite from '../../images/icons.svg';
import { selectColumns } from "redux/columns/selectors";
export const ColumnList = () => {

  const {boardId} = useParams()

  const dispatch = useDispatch();
     useEffect(() => {
      
    dispatch(getColumsById(boardId))
      
    }, [boardId]);
    const columns = useSelector(selectColumns);//приходить масив колонок;
    // const { boardId } = useParams(); // Отримуємо динамічний параметр з URL
    // console.log(boardId);
    
    // const filteredColumns = columns.filter((column) => column.board === boardId);
    // console.log(filteredColumns);
  
  
    const handlerEditColumn = (columnId, updatedData) => {
      dispatch(editColumn({ id: columnId, ...updatedData }));
    };
    const handlerDeleteColumn = columnId => {
      dispatch(deleteColumn(columnId));
    };
    

    return(
        <ColumnListStyled>  
           {columns.map(column => (
            <li key={column.id} >
                <ColumnTitle>{column.title}</ColumnTitle>
            </li>
           ))}                      
           <AddColumnButton/>
        </ColumnListStyled>
    )
};
