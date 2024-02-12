import {  CardListStyled, CardListWrapper } from "./CardList.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectTasks } from "redux/tasks/selectors";
import { TaskCard } from "components/TaskCard/TaskCard";
import { fetchTitle } from "redux/tasks/operations";
import { useEffect } from "react";

export const CardList = ( {columnId} ) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTitle())
  
  }, [dispatch])

    const tasks = useSelector(selectTasks);
    // console.log(tasks);
    // console.log(columnId);   
    const filteredTasks = tasks.filter((task) => task.column === columnId);
   
    return(
        <CardListWrapper>
        <CardListStyled>  
            {filteredTasks.map(task => (
              <li key={task._id}>
                <TaskCard task={task}/>
              </li>
            ))}
        </CardListStyled>      
        </CardListWrapper>
    )
};
