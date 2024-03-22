import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { DashBoardWrapper } from './DashBoard.styled';
import { ColumnList } from 'components/ColumnList/ColumnList';
import { DefaultTextBlock } from 'components/DefaultTextBlock/DefaultTextBlock';
import { selectBoardById } from 'redux/boards/selectors';

const DashBoard = () => {
  const { boardId } = useParams();
  const currBoard = useSelector(selectBoardById);
  
  return (
    <DashBoardWrapper>
      {!boardId ? (
        <DefaultTextBlock />
      ) : (
        <ColumnList columns={currBoard.columns} />
      )}
    </DashBoardWrapper>
  );
};

export default DashBoard;
