import { ColumnListItem } from "components/ColumnListItem/ColumnListItem";
import { ColumnListStyled } from "./ColumnList.styled";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAllBoards } from "redux/boards/selectors";

export const ColumnList = () => {
    
    const columns = useSelector(selectAllBoards);//приходить масив колонок;
    const { boardId } = useParams(); // Отримуємо динамічний параметр з URL
    console.log(boardId);
    const filteredColumns = columns.filter((column) => column.boardId === boardId);

    return(
        <ColumnListStyled>  
           {filteredColumns.map(column => (
            <ColumnListItem key={column.id} column={column}/>
           ))}                      
        </ColumnListStyled>
    )
};
