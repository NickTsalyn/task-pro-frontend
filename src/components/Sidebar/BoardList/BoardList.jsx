import { BoardListItem } from "../BoardListItem/BoardListItem"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchBoards } from "redux/boards/operations"
import { selectAllBoards } from "redux/boards/selectors"

export const BoardList = () => {
  const dispatch = useDispatch()
  const boards = useSelector(selectAllBoards)

  useEffect(() => {
    dispatch(fetchBoards())
  }, [dispatch])

  /*const boards = [{id: '12415', title: 'ala', icon: 'icon-colors', background: '4'}, {id: '32985', title: 'Board', icon: 'icon-container', background: '13'}]*/
  
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