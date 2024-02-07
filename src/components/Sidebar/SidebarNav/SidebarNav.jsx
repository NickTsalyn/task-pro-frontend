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
import { useNavigate } from 'react-router-dom';



export const SidebarNav = () => {
  // ******  модалка для helpapp
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate()
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  // ***********************
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout())
    
    navigate('/')
  }

  return (
    <SidebarWrapper>
      <StyledText>My boards</StyledText>

      {/* <StyledNavItems> */}
        <StyledCreateBtnWrapper>
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
      {/* </StyledNavItems> */}

      <StyledItemWrapper>
        <HelpApp openModal={openModal} />
        {isModalOpen && <NeedHelpModal onClose={closeModal} />}

        <StyledLogoutBtn type="button" onClick={handleClick}>
          <StyledSVGLogout>
            <use xlinkHref={`${sprite}#icon-login`}></use>
          </StyledSVGLogout>
          Log out
        </StyledLogoutBtn>
      </StyledItemWrapper>

    </SidebarWrapper>
  );
};
