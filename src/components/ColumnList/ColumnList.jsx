import { ColumnListItem } from "components/ColumnListItem/ColumnListItem";
import { ColumnListStyled } from "./ColumnList.styled";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { selectAllBoards } from "redux/boards/selectors";
import { selectColumns } from "redux/columns/selectors";
import { deleteColumn, editColumn, getAllColumns } from "redux/columns/operations";
import { useEffect } from "react";
import { ColumnHeader, ColumnTitle, ColumnWrapper, EditBlock, EditButton, EditSVG } from "components/ColumnListItem/ColumnListItem.styled";
import { CardList } from "components/CardList/CardList";
import { AddColumnButton } from "components/Button/AddColumnButton";
import sprite from '../../images/icons.svg';
export const ColumnList = () => {
  const dispatch = useDispatch();
     useEffect(() => {
      
    dispatch(getAllColumns());
      
    }, [dispatch]);
    const columns = useSelector(selectColumns);//приходить масив колонок;
    const { boardId } = useParams(); // Отримуємо динамічний параметр з URL
    console.log(boardId);
    
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
                <ColumnWrapper>
         <ColumnHeader>
         <ColumnTitle>{column.title}</ColumnTitle>
          <EditBlock>
            <EditButton type="button" onClick={() => handlerEditColumn(column.id)}>
              <EditSVG>
                <use xlinkHref={`${sprite}#icon-pencil-01`}/>
              </EditSVG>
            </EditButton>
            <EditButton type="button" onClick={() => handlerDeleteColumn(column.id)}>
              <EditSVG>
                <use xlinkHref={`${sprite}#icon-trash-04`}/>
              </EditSVG>
            </EditButton>
          </EditBlock>
         </ColumnHeader>          
            <CardList columnId={column.id}/>
            <AddColumnButton/>
        </ColumnWrapper>  
            </li>
           ))}                      
        </ColumnListStyled>
    )
};
