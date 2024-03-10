import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getAllColumns } from 'redux/columns/operations';
import { selectColumns } from 'redux/columns/selectors';
import { DashBoardWrapper } from './DashBoard.styled';
import { ColumnList } from 'components/ColumnList/ColumnList';
import { DefaultTextBlock } from 'components/DefaultTextBlock/DefaultTextBlock';

const DashBoard = () => {
  const { boardId } = useParams();

  const dispatch = useDispatch();
  const columns = useSelector(selectColumns);

  useEffect(() => {
    dispatch(getAllColumns());
  }, [dispatch, boardId]);

  const filteredColumns = columns.filter(column => column.board === boardId);

  return (
    <DashBoardWrapper>
      {!boardId ? (
        <DefaultTextBlock />
      ) : (
        <ColumnList columns={filteredColumns} />
      )}
    </DashBoardWrapper>
  );
};

export default DashBoard;
