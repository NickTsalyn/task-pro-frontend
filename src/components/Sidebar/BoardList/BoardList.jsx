import { BoardListItem } from "../BoardListItem/BoardListItem"

export const BoardList = ({boards}) => {
return (

    <ul>
<li><BoardListItem/></li>
    {/* {boards.map(board => (
      <li key={board.id}>
        <BoardListItem board={board} />
      </li>
    ))} */}
  </ul>
)
}