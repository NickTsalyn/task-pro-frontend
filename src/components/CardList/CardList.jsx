import { CardListStyled } from './CardList.styled';
import { useSelector } from 'react-redux';
import { TaskCard } from 'components/TaskCard/TaskCard';
import { selectFiltersPriority } from 'redux/filters/selectors';

export const CardList = ({ tasks }) => {
  const selectedPriority = useSelector(selectFiltersPriority);
  const formattedPriority = selectedPriority.map(
    priority => priority.charAt(0).toUpperCase() + priority.slice(1)
  );

  const filteredTasks = tasks.filter(task => {
    const priorityCondition =
      formattedPriority.length === 0 ||
      formattedPriority.includes(task.priority);
    return priorityCondition;
  });

  return (
    <>
      {filteredTasks.length > 0 && (
        <CardListStyled>
          {filteredTasks.map(task => (
            <TaskCard key={task._id} task={task} />
          ))}
        </CardListStyled>
      )}
    </>
  );
};
