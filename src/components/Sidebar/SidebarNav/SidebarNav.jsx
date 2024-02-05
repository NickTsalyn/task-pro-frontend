import { NeedHelp } from 'components/NeedHelp/NeedHelp';
import sprite from '../../../images/icons.svg';
import { BoardList } from '../BoardList/BoardList';
import {
  StyledCreateBtn,
  StyledCreateBtnIconWrapper,
  StyledCreateBtnWrapper,
  StyledLogoutBtn,
  StyledSVGLogout,
  StyledSVGPlus,
  StyledText,
} from './SidebarNav.styled';

export const SidebarNav = () => {
  return (
    <div>
      <StyledText>My boards</StyledText>

      <StyledCreateBtnWrapper>
        {' '}
        <StyledCreateBtn>
          Create a new board
          <StyledCreateBtnIconWrapper>
            <StyledSVGPlus>
              <use xlinkHref={`${sprite}#icon-plus`}></use>
            </StyledSVGPlus>
          </StyledCreateBtnIconWrapper>
        </StyledCreateBtn>
      </StyledCreateBtnWrapper>

      <BoardList />

      <NeedHelp />

      <StyledLogoutBtn>
        <StyledSVGLogout>
          <use xlinkHref={`${sprite}#icon-login`}></use>
        </StyledSVGLogout>
        Log out
      </StyledLogoutBtn>
    </div>
  );
};
