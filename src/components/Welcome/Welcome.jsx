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

export const Welcome = () => {
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
          Supercharge your productivity and take control of your tasks with Task
          Pro - Don't wait, start achieving your goals now!
        </StyledText>
        <NavLink to="/auth/register">
          <RegistrationBtn>Registration</RegistrationBtn>
        </NavLink>
        <NavLink to="/auth/login">
          <LoginBtn>Log In</LoginBtn>
        </NavLink>
      </Container>    
  );
};
