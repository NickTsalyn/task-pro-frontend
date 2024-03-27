import { AddColumnButton } from 'components/EditColumnButtons/AddColumnButton/AddColumnButton';
import {
  ColumnButtonwrapper,
  ColumnListStyled,
  ColumnListWrapper,
} from './ColumnList.styled';
import { ColumnListItem } from 'components/ColumnListItem/ColumnListItem';
import { DragDropContext } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { dndMovement } from 'redux/tasks/operations';
import { useSelector } from 'react-redux';
import { selectCurrBoardColumns } from 'redux/boards/selectors';

export const ColumnList = () => {
  const dispatch = useDispatch();
  const columns = useSelector(selectCurrBoardColumns);

  const onDragEnd = result => {
    const { destination, source } = result;
    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const startColumn = columns.find(
      column => column._id === source.droppableId
    );
    const finishColumn = columns.find(
      column => column._id === destination.droppableId
    );
    const draggableTask = startColumn.tasks[source.index];

    dispatch(
      dndMovement({
        taskID: draggableTask._id,
        finishTaskIndex: destination.index,
        startColumnID: startColumn._id,
        finishColumnID: finishColumn._id,
      })
    );
  };

  return (
    <ColumnListWrapper>
      {columns.length !== 0 && (
        <DragDropContext onDragEnd={onDragEnd}>
          <ColumnListStyled>
            {columns.map(column => (
              <ColumnListItem key={column._id} column={column} />
            ))}
          </ColumnListStyled>
        </DragDropContext>
      )}

      <ColumnButtonwrapper>
        <AddColumnButton />
      </ColumnButtonwrapper>
    </ColumnListWrapper>
  );
};
