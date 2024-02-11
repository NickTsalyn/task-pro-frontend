import sprite from '../../../images/icons.svg';
import { StyledBoardItem, StyledBoardList, StyledBoardListdBtn, StyledBtnWrapper, StyledSVGIcon, StyledSVGPensil, StyledSVGTrash } from './BoardListItem.styled';
import { useState } from 'react';
import { useDispatch} from "react-redux"
import { deleteBoard, editBoard,  } from 'redux/boards/operations';
import { BoardModalBase } from 'components/boardModals/ModalsBase/BoardModalBase';
import { Link } from 'react-router-dom';

export const BoardListItem = ({ board }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setOpenModal] = useState(false);
  
  function CloseModal() {
    setOpenModal(false);
  }

  function OpenModal() {
    setOpenModal(true);
  }

  function SubmitForm(info) {
    const { _id } = board
    dispatch(editBoard({ _id, info }))
    setOpenModal(false);
  }

  function HandleDelete() {
    dispatch(deleteBoard(board._id))
  }
  
  return (
    <StyledBoardList>
      {/* <StyledBoardItem to={`/home/${board._id}`}></StyledBoardItem> */}
      <StyledSVGIcon><use xlinkHref={`${sprite}#${board.iconURL}`}></use></StyledSVGIcon>
      <StyledBoardItem type='button' 
      // onClick={()=> dispatch(getBoardById(boardId))}
      >        
        <Link to={`/home/${board._id}`}>{board.title}</Link>
      </StyledBoardItem>

      <StyledBtnWrapper> 
        <StyledBoardListdBtn onClick={OpenModal} type='button'>
          <StyledSVGPensil>
            <use xlinkHref={`${sprite}#icon-pencil-01`}></use>
          </StyledSVGPensil>
        </StyledBoardListdBtn>

        <StyledBoardListdBtn onClick={HandleDelete} type='button'>
          <StyledSVGTrash>
            <use xlinkHref={`${sprite}#icon-trash-04`}></use>
          </StyledSVGTrash>
        </StyledBoardListdBtn>
      </StyledBtnWrapper>

      <BoardModalBase
        isModalOpen={isModalOpen}
        info={board}
        onCloseModal={CloseModal}
        action={'edit'}
        SubmitForm={SubmitForm}
      />
      </StyledBoardList>
  )
}