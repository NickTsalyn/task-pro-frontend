import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { BoardModalBase } from 'components/boardModals/ModalsBase/BoardModalBase';
import { getBoardById, deleteBoard, editBoard } from 'redux/boards/operations';
import sprite from '../../../images/icons.svg';
import {
  StyledBoardItem,
  StyledBoardList,
  StyledBoardListBtn,
  StyledBtnWrapper,
  StyledSVGPensil,
  StyledSVGTrash,
} from './BoardListItem.styled';

export const BoardListItem = ({ board, active, onClick }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    navigate('/home');
  }

  return (
    <StyledBoardList active={active.toString()} onClick={onClick}>
      <StyledBoardItem
        type="button"
        active={active.toString()}
        onClick={() => {
          onClick();
          dispatch(getBoardById(board._id));
        }}
      >
        <svg>
          <use xlinkHref={`${sprite}#${board.icon}`}></use>
        </svg>

        <Link to={`/home/${board._id}`}>{board.title}</Link>
      </StyledBoardItem>

      <StyledBtnWrapper active={active.toString()} onClick={onClick}>
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

      {isModalOpen && (
        <BoardModalBase
          isModalOpen={isModalOpen}
          info={board}
          onCloseModal={CloseModal}
          action={'edit'}
          SubmitForm={SubmitForm}
        />
      )}
    </StyledBoardList>
  );
};
