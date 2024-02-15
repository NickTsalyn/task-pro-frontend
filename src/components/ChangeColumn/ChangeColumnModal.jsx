import sprite from '../../images/icons.svg';
import { useDispatch } from 'react-redux';

import {
  ChangeButton,
  ChangeWrapper,
  StyledSVGChange,
} from './ChangeColumn.styled';

import { editTask } from 'redux/tasks/operations';

export const ChangeColumnModal = props => {
  const dispatch = useDispatch();
  const { taskId, columns } = props;

  return (
    <ChangeWrapper>
      <ul>
        {columns.map(column => (
          <li key={column._id}>
            <ChangeButton
              type="button"
              onClick={() => dispatch(editTask({ taskId, column: column._id }))}
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
