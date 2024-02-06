// needhelp
import React, { useState } from 'react';
import HelpApp from "components/HelpApp/HelpApp.jsx"
import { NeedHelpModal } from 'components/NeedHelpModal/NeedHelpModal.jsx';

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
  // ******  модалка для helpapp
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
// ***********************
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
      <HelpApp openModal={openModal} />
      {isModalOpen && <NeedHelpModal onClose={closeModal} />}

      <StyledLogoutBtn type="button" onClick={() => dispatch(logout())}>
        <StyledSVGLogout>
          <use xlinkHref={`${sprite}#icon-login`}></use>
        </StyledSVGLogout>
        Log out
      </StyledLogoutBtn>
    </div>
  );
};
