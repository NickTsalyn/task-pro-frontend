import { BoardListItem } from "../BoardListItem/BoardListItem"
import { useSelector } from "react-redux"
import { selectAllBoards } from "redux/boards/selectors"

export const BoardList = () => {
  const boards = useSelector(selectAllBoards)
  //const boards = [{id: '12415', title: 'ala', icon: 'icon-colors', background: '4'}, {id: '32985', title: 'Board', icon: 'icon-container', background: '13'}]
  
  return (
    <ul>
    {boards.map(board => (
      <li key={board.id}>
        <BoardListItem board={board} />
      </li>
    ))}
  </ul>
  )
}