import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const WelcomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(
    180deg,
    rgba(196, 196, 196, 0) 25%,${p => p.theme.colors.lightGreen} 92.19%
  );
`;
export const FormContainer = styled.div`
  width: calc(100%-84px);
  background-color: ${p => p.theme.colors.darkBgn};
  padding: 24px;
  border-radius: ${p=> p.theme.radius.m};
  border: 1px solid black;

  @media (min-width: 375px) {
    width: 335px;
  }

  @media (min-width: 768px) {
    border: 1px solid black;
    padding: 40px;
    width: 424px;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  margin-bottom: 40px;
  gap: ${p=> p.theme.spacing(3.5)};
`;

export const AuthLinks = styled(NavLink)`
  color: rgba(255, 255, 255, 0.3);
  text-decoration: none;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.02em;
  background: none;
  border: none;
  transition: color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover,
  &.active {
    color: #fff;
  }
`;
