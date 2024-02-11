// needhelp
// import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import sprite from '../../../images/icons.svg';
import { BoardList } from '../BoardList/BoardList';
import { AddBoard } from "components/boardModals/addBoard";
import {
  ItemsWrapper,
  SidebarWrapper,
  StyledCreateWrapper,
  StyledLogoutBtn,
  StyledSVGLogout,
  StyledText,
} from './SidebarNav.styled';
import { logout } from 'redux/auth/operations';
import HelpApp from 'components/HelpApp/HelpApp.jsx';

export const SidebarNav = () => {
  const dispatch = useDispatch();
const navigate = useNavigate()

  const handleClick = () => {
    dispatch(logout());
    navigate('/');
  };

  const { t } = useTranslation('global');
  return (
    <SidebarWrapper>
      <StyledText>{t('screenPage.static.my-boards')}</StyledText>
      <StyledCreateWrapper>
        <AddBoard />
      </StyledCreateWrapper>
      <BoardList />
      <ItemsWrapper>
        <HelpApp />
        <StyledLogoutBtn type="button" onClick={handleClick}>
          <StyledSVGLogout>
            <use xlinkHref={`${sprite}#icon-login`}></use>
          </StyledSVGLogout>
          {t('screenPage.static.logout')}
        </StyledLogoutBtn>
      </ItemsWrapper>
    </SidebarWrapper>
  );
};
