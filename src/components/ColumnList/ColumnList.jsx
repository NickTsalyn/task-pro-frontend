import { AddColumnButton } from 'components/Button/AddColumnButton';
import { ColumnListStyled, ColumnListWrapper } from './ColumnList.styled';
// import { AddColumnButton } from "components/Button/AddColumnButton";
import { ColumnListItem } from 'components/ColumnListItem/ColumnListItem';

export const ColumnList = ({ columns }) => {
  //   const {boardId} = useParams();

  //   const dispatch = useDispatch();
  //      useEffect(() => {

  //     dispatch(getColumsById(boardId))

  //     }, [boardId]);
  // const columns = useSelector(selectColumns);//приходить масив колонок;
  // const { boardId } = useParams(); // Отримуємо динамічний параметр з URL
  // console.log(boardId);

  // const filteredColumns = columns.filter((column) => column.board === boardId);
  // console.log(filteredColumns);

  // const handlerEditColumn = (columnId, updatedData) => {
  //   dispatch(editColumn({ id: columnId, ...updatedData }));
  // };
  // const handlerDeleteColumn = columnId => {
  //   dispatch(deleteColumn(columnId));
  // };

  return (
    <ColumnListWrapper>
      <ColumnListStyled>
        {columns.map(column => (
          <li key={column._id}>
            {/* <ColumnWrapper> */}
            {/* <ColumnTitle>{column.title}</ColumnTitle> */}

            {/* <CardList/> */}
            <ColumnListItem column={column} />
            {/* </ColumnWrapper> */}
          </li>
        ))}
      </ColumnListStyled>

      <AddColumnButton />
    </ColumnListWrapper>
  );
};
