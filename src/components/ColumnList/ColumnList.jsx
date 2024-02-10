import { ColumnListItem } from "components/ColumnListItem/ColumnListItem";
import { ColumnListStyled } from "./ColumnList.styled";
// приходить масив колонок
//список колонок
export const ColumnList = () => {
    return(
        <ColumnListStyled>  
            <ColumnListItem/>
            {/* <ColumnListItem/> 
            <ColumnListItem/>                        */}
        </ColumnListStyled>
    )
};
