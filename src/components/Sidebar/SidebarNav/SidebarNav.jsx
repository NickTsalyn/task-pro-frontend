// needhelp
import HelpApp from "components/HelpApp/HelpApp.jsx"

import { useDispatch } from 'react-redux';
import sprite from '../../../images/icons.svg';
import { BoardList } from '../BoardList/BoardList';
import { AddBoard } from "components/boardModals/addBoard";
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
        <AddBoard />
      </StyledCreateBtnWrapper>

      <BoardList />

      {/* <NeedHelp/> */}
      <HelpApp />

      <StyledLogoutBtn type="button" onClick={() => dispatch(logout())}>
        <StyledSVGLogout>
          <use xlinkHref={`${sprite}#icon-login`}></use>
        </StyledSVGLogout>
        Log out
      </StyledLogoutBtn>
    </div>
  );
};
