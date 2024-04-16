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
import { useEffect, useState } from 'react';
import { updateStatusLocalThunk } from 'redux/boards/operations';

export const ColumnList = () => {
  const dispatch = useDispatch();
  const [columnsBoard, setColumnsBoard] = useState(null);
  const columns = useSelector(selectCurrBoardColumns);

  useEffect(() => {
    if (columns) {
      const initializedColumns = {};
      columns.forEach(column => {
        initializedColumns[column._id] = {
          columnId: column._id,
          items: column.tasks,
        };
      });
      setColumnsBoard(initializedColumns);
    }
  }, [columns]);

  const onDragEnd = result => {
    const { destination, source } = result;
    if (!destination) return;

    const startColumn = columnsBoard[source.droppableId];
    const finishColumn = columnsBoard[destination.droppableId];
    const draggableTask = startColumn.items[source.index];

    const data = {
      task: draggableTask,
      currentColumnId: startColumn.columnId,
      newColumnId: finishColumn.columnId,
      currentTaskIdx: source.index,
      newTaskIdx: destination.index,
    };

    dispatch(updateStatusLocalThunk(data));

    dispatch(
      dndMovement({
        taskID: draggableTask._id,
        finishTaskIndex: destination.index,
        startColumnID: startColumn.columnId,
        finishColumnID: finishColumn.columnId,
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
