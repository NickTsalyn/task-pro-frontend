// needhelp
import React, { useState } from 'react';
import HelpApp from 'components/HelpApp/HelpApp.jsx';
import { NeedHelpModal } from 'components/NeedHelpModal/NeedHelpModal.jsx';

import { useDispatch } from 'react-redux';
import sprite from '../../../images/icons.svg';
import { BoardList } from '../BoardList/BoardList';
import {
  SidebarWrapper,
  StyledCreateBtn,
  StyledCreateBtnIconWrapper,
  StyledCreateBtnWrapper,
  StyledItemWrapper,
  StyledLogoutBtn,
 
  StyledSVGLogout,
  StyledSVGPlus,
  StyledText,
} from './SidebarNav.styled';
import { logout } from 'redux/auth/operations';
import { AddBoard } from 'components/boardModals/addBoard';

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
    <SidebarWrapper>
      <StyledText>My boards</StyledText>
      {/* <StyledNavItems> */}
        <StyledCreateBtnWrapper>
          <StyledCreateBtn>
            Create a new board
            <AddBoard />
          </StyledCreateBtn>
        </StyledCreateBtnWrapper>
        <BoardList />
      {/* </StyledNavItems> */}

      <StyledItemWrapper>
        <HelpApp openModal={openModal} />
        {isModalOpen && <NeedHelpModal onClose={closeModal} />}

        <StyledLogoutBtn type="button" onClick={() => dispatch(logout())}>
          <StyledSVGLogout>
            <use xlinkHref={`${sprite}#icon-login`}></use>
          </StyledSVGLogout>
          Log out
        </StyledLogoutBtn>
      </StyledItemWrapper>

    </SidebarWrapper>
  );
};
