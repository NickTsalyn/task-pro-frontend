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
      {columns.length !== 0 && (
        <ColumnListStyled>
          {columns.map(column => (
            <ColumnListItem
              key={column._id}
              column={column}
              columns={columns}
            />
          ))}
        </ColumnListStyled>
      )}
      <ColumnButtonwrapper>
        <AddColumnButton />
      </ColumnButtonwrapper>
    </ColumnListWrapper>
  );
};
