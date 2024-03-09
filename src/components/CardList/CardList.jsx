import { CardListStyled } from './CardList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectTasks } from 'redux/tasks/selectors';
import { TaskCard } from 'components/TaskCard/TaskCard';
import { fetchTitle } from 'redux/tasks/operations';
import { useEffect } from 'react';
import { selectFiltersPriority } from 'redux/filters/selectors';

export const CardList = ({ columnId, filtColumns }) => {
  const dispatch = useDispatch();
  const selectedPriority = useSelector(selectFiltersPriority);
  const formattedPriority = selectedPriority.map(
    priority => priority.charAt(0).toUpperCase() + priority.slice(1)
  );

  useEffect(() => {
    dispatch(fetchTitle());
  }, [dispatch]);

  const tasks = useSelector(selectTasks);

  const filteredTasks = tasks.filter(task => {
    const priorityCondition =
      formattedPriority.length === 0 ||
      formattedPriority.includes(task.priority);

    const columnCondition = task.column === columnId;

    return priorityCondition && columnCondition;
  });
  return (
    <>
      {filteredTasks.length > 0 && (
        <CardListStyled>
          {filteredTasks.map(task => (
            <TaskCard key={task._id} task={task} columns={filtColumns} />
          ))}
        </CardListStyled>
      )}
    </>)
};
