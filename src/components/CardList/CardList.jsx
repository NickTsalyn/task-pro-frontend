import { CardListStyled } from './CardList.styled';
import { useSelector } from 'react-redux';
import { TaskCard } from 'components/TaskCard/TaskCard';
import { selectFiltersPriority } from 'redux/filters/selectors';
import { Droppable } from 'react-beautiful-dnd';

export const CardList = ({ tasks, columnID }) => {
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
      <Droppable droppableId={columnID}>
        {provided => (
          <CardListStyled
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {filteredTasks.map((task, index) => (
              <TaskCard key={task._id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </CardListStyled>
        )}
      </Droppable>
    </>
  );
};
