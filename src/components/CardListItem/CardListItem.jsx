import { TaskCard } from "components/TaskCard/TaskCard";

export const CardListItem = () => {
    // const cards = [];
    return(
        <>
          {/* {cards.map(card => */}
            <li >
             {/* key={card.id} */}
                <TaskCard/>                 
            </li>
          {/* ) }   */}
        </>      
      );
};
