import sprite from '../../images/icons.svg';
import { useDispatch, useSelector } from 'react-redux';

import {
  ChangeButton,
  ChangeWrapper,
  StyledSVGChange,
} from './ChangeColumn.styled';

import { editTask } from 'redux/tasks/operations';
import { selectColumns } from 'redux/columns/selectors';
import { useParams } from 'react-router-dom';

export const ChangeColumnModal = props => {
  const { boardId } = useParams();
  const dispatch = useDispatch();
  const columns = useSelector(selectColumns);
  const { Id } = props;

  const filteredColumns = columns.filter(column => column.board === boardId);
  return (
    <ChangeWrapper>
      <ul>
        {filteredColumns.map(column => (
          <li key={column._id}>
            <ChangeButton
              type="button"
              onClick={() =>
                dispatch(editTask({ taskId: Id, column: column._id }))
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
