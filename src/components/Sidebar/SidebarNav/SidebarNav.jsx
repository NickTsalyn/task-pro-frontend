// needhelp
import React, { useState } from 'react';
import HelpApp from 'components/HelpApp/HelpApp.jsx';
import { NeedHelpModal } from 'components/NeedHelpModal/NeedHelpModal.jsx';

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
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const SidebarNav = () => {
  // ******  модалка для helpapp
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  // ***********************
  const dispatch = useDispatch();

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
        <HelpApp openModal={openModal} />
        {isModalOpen && <NeedHelpModal onClose={closeModal} />}

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
