import sprite from '../../images/icons.svg';
import { useDispatch, useSelector } from 'react-redux';

import {
  ChangeButton,
  ChangeWrapper,
  StyledSVGChange,
} from './ChangeColumn.styled';

import { changeColumnTask } from 'redux/tasks/operations';
import { selectCurrBoardColumns } from 'redux/boards/selectors';

export const ChangeColumnModal = ({ Id, columnID: currentColumnID }) => {
  const dispatch = useDispatch();
  const columns = useSelector(selectCurrBoardColumns);
  const filteredColumns = columns.filter(column => column._id !== currentColumnID);

  return (
    <ChangeWrapper>
      <ul>
        {filteredColumns.map(column => (
          <li key={column._id}>
            <ChangeButton
              type="button"
              onClick={() =>
                dispatch(changeColumnTask({ taskId: Id, columnID: column._id }))
              }
            >
              {column.title}
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
