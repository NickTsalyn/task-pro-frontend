import { AddColumnButton } from 'components/EditColumnButtons/AddColumnButton/AddColumnButton';
import {
  ColumnButtonwrapper,
  ColumnListStyled,
  ColumnListWrapper,
} from './ColumnList.styled';
import { ColumnListItem } from 'components/ColumnListItem/ColumnListItem';

export const ColumnList = ({ columns }) => {
  return (
    <ColumnListWrapper>
      <ColumnListStyled>
        {columns.map(column => (
          <li key={column._id}>
            <ColumnListItem column={column} columns={columns} />
          </li>
        ))}
      </ColumnListStyled>
      <ColumnButtonwrapper>
        <AddColumnButton />
      </ColumnButtonwrapper>
    </ColumnListWrapper>
  );
};
