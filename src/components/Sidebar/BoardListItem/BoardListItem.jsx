import sprite from '../../../images/icons.svg';
import { StyledBoardListdBtn, StyledSVGPensil, StyledSVGTrash } from './BoardListItem.styled';

export const BoardListItem = ({board}) => {
    return (
    
        <div>
      <img src="" alt="" />
       <p>Board name</p>

       <div> 
        <StyledBoardListdBtn>
       <StyledSVGPensil>
            <use xlinkHref={`${sprite}#icon-pencil-01`}></use>
          </StyledSVGPensil>
       </StyledBoardListdBtn>
       <StyledBoardListdBtn>
       <StyledSVGTrash>
            <use xlinkHref={`${sprite}#icon-trash-04`}></use>
          </StyledSVGTrash>
       </StyledBoardListdBtn>
       </div>
      
      </div>
    )
    }