// import { NeedHelp } from 'components/NeedHelp/needhelp';
import { useDispatch } from 'react-redux';
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
import { logout } from 'redux/auth/operations';

export const SidebarNav = () => {
  const dispatch = useDispatch();

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

      {/* <NeedHelp/> */}

      <StyledLogoutBtn type="button" onClick={() => dispatch(logout())}>
        <StyledSVGLogout>
          <use xlinkHref={`${sprite}#icon-login`}></use>
        </StyledSVGLogout>
        Log out
      </StyledLogoutBtn>
    </div>
  );
};
