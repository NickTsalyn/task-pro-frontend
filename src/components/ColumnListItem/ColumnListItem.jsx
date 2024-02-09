import { CardList } from 'components/CardList/CardList';
import sprite from '../../images/icons.svg'

import { ColumnHeader, ColumnTitle, ColumnWrapper, EditBlock, EditButton, EditSVG } from "./ColumnListItem.styled";
import { AddColumnButton } from 'components/Button/AddColumnButton';

export const ColumnListItem = ({column}) => {    
  
    
    return(
        <ColumnWrapper>
         <ColumnHeader>
         <ColumnTitle>{column.title}</ColumnTitle>
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
            <CardList/>
            <AddColumnButton/>
        </ColumnWrapper>      
      );
};
