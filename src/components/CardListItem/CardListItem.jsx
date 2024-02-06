import { TaskCard } from "components/TaskCard/TaskCard";

export const CardListItem = () => {
    // const tasks = [];
    return(
        <>
          {/* {tasks.map(tasks => */}
            <li >
             {/* key={task.id} */}
                <TaskCard/>                 
            </li>
          {/* ) }   */}
        </>      
      );
};
