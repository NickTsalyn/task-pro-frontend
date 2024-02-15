
import sprite from '../../images/icons.svg';
import { useSelector } from 'react-redux';

import { ChangeButton, ChangeWrapper, StyledSVGChange } from './ChangeColumn.styled';
import { selectColumns } from 'redux/columns/selectors';


export const ChangeColumnModal = () => {

const columns = useSelector(selectColumns)
  return (
    <ChangeWrapper>
      <ul>
        {columns.map(column => (
          <li key={column._id}>
            <ChangeButton type="button">{column.title} 
            <StyledSVGChange>
            <use xlinkHref={`${sprite}#icon-active`}></use>
          </StyledSVGChange>
            </ChangeButton>
          </li>
        ))}
      </ul>

    </ChangeWrapper>
  );
};
