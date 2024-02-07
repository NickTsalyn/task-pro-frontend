import sprite from '../../../images/icons.svg';
import { StyledBoardItem, StyledBoardList, StyledBoardListdBtn, StyledBtnWrapper, StyledSVGPensil,  StyledSVGTrash,  } from './BoardListItem.styled';

export const BoardListItem = ({board}) => {
    return (
    
        <StyledBoardList>
      <img src="" alt="" />
       <StyledBoardItem type='button'>Board name</StyledBoardItem>

       <StyledBtnWrapper> 

        <StyledBoardListdBtn type='button'>
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
      <span></span>
      </StyledBoardList>
    )
    }