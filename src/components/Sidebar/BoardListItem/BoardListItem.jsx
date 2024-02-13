import sprite from '../../../images/icons.svg';
import {
  StyledBoardItem,
  StyledBoardList,
  StyledBoardListBtn,
  StyledBtnWrapper,
  StyledSVGPensil,
  StyledSVGTrash,
} from './BoardListItem.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getBoardById, deleteBoard, editBoard } from 'redux/boards/operations';
import { BoardModalBase } from 'components/boardModals/ModalsBase/BoardModalBase';
import { Link } from 'react-router-dom';

export const BoardListItem = ({ board, isActive, onClick }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setOpenModal] = useState(false);

  function CloseModal() {
    setOpenModal(false);
  }

  function OpenModal() {
    setOpenModal(true);
  }

  function SubmitForm(info) {
    const { _id } = board;
    dispatch(editBoard({ _id, info }));
    setOpenModal(false);
  }

  function HandleDelete() {
    dispatch(deleteBoard(board._id));
  }

  return (
    <StyledBoardList isActive={isActive} onClick={onClick}>
      {/* <StyledBoardItem to={`/home/${board._id}`}></StyledBoardItem> */}
      
      <StyledBoardItem
        type="button"
        isActive={isActive}
        onClick={() => {
          onClick()
          dispatch(getBoardById(board._id))
        }}
      >
        <svg>
        <use xlinkHref={`${sprite}#${board.iconURL}`}></use>
      </svg>
      
        <Link to={`/home/${board._id}`}>{board.title}</Link>

      </StyledBoardItem>

      <StyledBtnWrapper isActive={isActive} onClick={onClick}>
        <StyledBoardListBtn onClick={OpenModal} type="button">
          <StyledSVGPensil>
            <use xlinkHref={`${sprite}#icon-pencil-01`}></use>
          </StyledSVGPensil>
        </StyledBoardListBtn>

        <StyledBoardListBtn onClick={HandleDelete} type="button">
          <StyledSVGTrash>
            <use xlinkHref={`${sprite}#icon-trash-04`}></use>
          </StyledSVGTrash>
        </StyledBoardListBtn>
      </StyledBtnWrapper>

      <BoardModalBase
        isModalOpen={isModalOpen}
        info={board}
        onCloseModal={CloseModal}
        action={'edit'}
        SubmitForm={SubmitForm}
      />
    </StyledBoardList>
  );
};
