// needhelp
// import React, { useState } from 'react';
import HelpApp from 'components/HelpApp/HelpApp.jsx';

import { useDispatch } from 'react-redux';
import sprite from '../../../images/icons.svg';
import { BoardList } from '../BoardList/BoardList';
import {
  ItemsWrapper,
  SidebarWrapper,
  StyledCreateWrapper,
  StyledLogoutBtn,
  StyledSVGLogout,
  StyledText,
} from './SidebarNav.styled';
import { logout } from 'redux/auth/operations';
import { AddBoard } from 'components/boardModals/addBoard';
import { useTranslation } from 'react-i18next';
import { Navigate } from 'react-router-dom';

export const SidebarNav = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout());

    Navigate('/');
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
