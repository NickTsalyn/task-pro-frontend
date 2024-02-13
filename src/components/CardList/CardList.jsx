import { CardListStyled } from './CardList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectTasks } from 'redux/tasks/selectors';
import { TaskCard } from 'components/TaskCard/TaskCard';
import { fetchTitle } from 'redux/tasks/operations';
import { useEffect } from 'react';
import { selectFiltersPriority } from 'redux/filters/selectors';

export const CardList = ({ columnId }) => {
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
    if (formattedPriority.length === 0) {
      return true;
    }
    return formattedPriority.includes(task.priority);
  });
  return (
    // <CardListWrapper>
    <CardListStyled>
      {filteredTasks.map(task => (
        <li key={task._id}>
          <TaskCard task={task} />
        </li>
      ))}
    </CardListStyled>
    // </CardListWrapper>
  );
};
