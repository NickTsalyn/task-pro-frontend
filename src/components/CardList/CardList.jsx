// import { CardListItem } from "components/CardListItem/CardListItem";
import { ButtonAddCard, CardListStyled, CardListWrapper } from "./CardList.styled";
import { useSelector } from "react-redux";
import { selectTasks } from "redux/tasks/selectors";
import { TaskCard } from "components/TaskCard/TaskCard";

export const CardList = ( {columnId} ) => {
    const tasks = useSelector(selectTasks);
    const id = state => state.task.column;
    const filteredTasks = tasks.filter((tasks) => id === columnId);
    return(
        <CardListWrapper>
        <CardListStyled>
            {filteredTasks.map(task => (
                <TaskCard key={task}/>
            ))}
        </CardListStyled>
        <ButtonAddCard type="button">AddAnotherCard</ButtonAddCard>
        </CardListWrapper>
    )
};
