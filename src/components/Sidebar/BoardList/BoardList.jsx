import { BoardListItem } from '../BoardListItem/BoardListItem';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBoards } from 'redux/boards/operations';
import { selectAllBoards } from 'redux/boards/selectors';
import { StyledBoardListWrapper } from './BoardList.styled';

export const BoardList = () => {
  const dispatch = useDispatch();
  const boards = useSelector(selectAllBoards);

  useEffect(() => {
    dispatch(fetchBoards());
  }, [dispatch]);

  const [activeItem, setActiveItem] = useState(null);

  const handleBoardClick = board => {
    setActiveItem(board);
  };
  return (
    <>
    {boards.length > 0 && (
      <ul>
        {boards.map(board => (
          <li key={board._id}>
            <BoardListItem board={board} />
          </li>
        ))}
      </ul>
    )}
    </>
  );
};
