import sprite from '../../../images/icons.svg';
import { StyledBoardItem, StyledBoardList, StyledBoardListdBtn, StyledBtnWrapper, StyledSVGPensil,  StyledSVGTrash,  } from './BoardListItem.styled';
import { useState } from 'react';
import { BoardModalBase } from 'components/boardModals/ModalsBase/BoardModalBase';

export const BoardListItem = ({ board, isActive, onClick }) => {
  const [isModalOpen, setOpenModal] = useState(false);

  function CloseModal() {
    setOpenModal(false);
  }

  function OpenModal() {
    setOpenModal(true);
  }

  function SubmitForm(info) {
    console.log(info);
    setOpenModal(false);
  }

  return (
        <StyledBoardList isActive={isActive} onClick={onClick}>
      
       <StyledBoardItem type='button'>{board.title}</StyledBoardItem>

       <StyledBtnWrapper> 

        <StyledBoardListdBtn onClick={OpenModal} type='button'>
       <StyledSVGPensil>
            <use xlinkHref={`${sprite}#icon-pencil-01`}></use>
          </StyledSVGPensil>
       </StyledBoardListdBtn>

       <StyledBoardListdBtn type='button'>
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