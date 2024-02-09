import { TaskCard } from "components/TaskCard/TaskCard";
import { useSelector } from "react-redux";
import { selectVisibleTasks } from "redux/tasks/selectors";


export const CardListItem = () => {

  const visibleTasks = useSelector(selectVisibleTasks);
    //   if (visibleTasks.length === 0) {
    //       return <p>No tasks to display.</p>;
    //   }
    return(
        <>
            <li >
              {visibleTasks.map(task =>
                <TaskCard
                key={task.id}
                task={task}
                />
                )}                                 
            </li>
        </>      
      );
};
