// import { useDispatch, useSelector } from "react-redux";

import { CardList } from 'components/CardList/CardList';
import sprite from '../../images/icons.svg'

import { ColumnHeader, ColumnTitle, ColumnWrapper, EditBlock, EditButton, EditSVG } from "./ColumnListItem.styled";

export const ColumnListItem = () => {

    // const dispatch = useDispatch();    
    // const items = useSelector(selectColumns);
    // const columns = [];
    const title = ' Column Title';
    
    return(
        <ColumnWrapper>
         <ColumnHeader>
         <ColumnTitle>{title}</ColumnTitle>
          <EditBlock>
            <EditButton type="button">
              <EditSVG>
                <use xlinkHref={`${sprite}#icon-pencil-01`}/>
              </EditSVG>
            </EditButton>
            <EditButton type="button">
              <EditSVG>
                <use xlinkHref={`${sprite}#icon-trash-04`}/>
              </EditSVG>
            </EditButton>
          </EditBlock>
         </ColumnHeader>
          {/* {columns.map(column =>
            <li key={column.id}> */}
                <CardList/>
                {/* <button>ButtonAddAnotherCard</button>                  */}
            {/* </li>
          ) }   */}
        </ColumnWrapper>      
      );
};
