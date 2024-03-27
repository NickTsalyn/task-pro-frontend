import { useParams } from 'react-router-dom';

import { DashBoardWrapper } from './DashBoard.styled';
import { ColumnList } from 'components/ColumnList/ColumnList';
import { DefaultTextBlock } from 'components/DefaultTextBlock/DefaultTextBlock';

const DashBoard = () => {
  const { boardId } = useParams();
  
  return (
    <DashBoardWrapper>
      {!boardId ? (
        <DefaultTextBlock />
      ) : (
        <ColumnList />
      )}
    </DashBoardWrapper>
  );
};

export default DashBoard;
