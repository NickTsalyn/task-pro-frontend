import React from 'react';
import welcomImg from '../../img/welcome.png';
import {
  Container,
  LoginBtn,
  LogoWrapper,
  RegistrationBtn,
  StyledH1,
  StyledImg,
  StyledSVG,
  StyledText,
} from './Welcome.styled';
import sprite from '../../images/icons.svg';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Welcome = () => {
  const { t } = useTranslation('global');

  return (
    <Container>
      <StyledImg src={welcomImg} alt="welcome-img" />
      <LogoWrapper>
        <StyledSVG>
          <use xlinkHref={`${sprite}#icon-logo`}></use>
        </StyledSVG>
        <StyledH1>Task Pro</StyledH1>
      </LogoWrapper>
      <StyledText>
       {t('welcomePage.welcome.text')}
      </StyledText>
      <NavLink to="/auth/register">
        <RegistrationBtn>{t('welcomePage.welcome.registration')}</RegistrationBtn>
      </NavLink>
      <NavLink to="/auth/login">
        <LoginBtn>{t('welcomePage.welcome.login')}</LoginBtn>
      </NavLink>
    </Container>
  );
};
