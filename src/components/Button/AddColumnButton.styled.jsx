import styled from 'styled-components';
import { Button } from './Button';

// export const Main = styled.main`
//   width: 100%;
//   min-height: 100vh;
// `;

// export const Section = styled.section`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   min-height: 100vh;
// `;

export const ModalShowButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 334px;
  height: 56px;
  gap: 8px;
  padding: 14px 0;
  margin-bottom: 24px;
  font-family: Poppins;
  font-size: 14px;
  letter-spacing: -0.02px;
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.darkTextColor};
  border-radius: ${props => props.theme.radius.m};
  border: 0;
  border-color: ${props => props.theme.colors.white};
  filter: drop-shadow(0 0 7px rgba(22, 22, 22, 0.08));
  transition: background-color 0.3s;
  &:hover {
    opacity: 0.8;
  }
`;

export const AddColumnTitle = styled.p`
  color: ${props => props.theme.colors.darkTextColor};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.32px;
  margin-bottom: 24px;
`;

export const AddColumnInput = styled.input`
  display: block;
  width: 249px;
  height: 21px;
  padding: 14px 18px;
  margin-bottom: 24px;
  margin-top: 24px;
  opacity: 0.4;
  border-radius: ${props => props.theme.radius.m};
  border: 1px solid ${props => props.theme.violetColors.accentColor};
  box-shadow: 0 4px 16px 0 ${props => props.theme.colors.shadowColor};
  background-color: transparent;
  color: ${props => props.theme.colors.darkTextColor};
  letter-spacing: -0.32px;
  &:focus {
    opacity: 1;
    outline: 1px solid ${props => props.theme.violetColors.accentColor};
  }
  @media screen and (min-width: 768px) {
    width: 264px;
  }
`;

export const AddColumnBtn = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Poppins;
  font-size: 14px;
  letter-spacing: -0.32px;
  gap: 8px;
  width: 100%;
  width: 287px;
  height: 49px;

  padding: 10px 0;
  background-color: ${props => props.theme.violetColors.accentColor};
  color: ${props => props.theme.colors.white};
  border-radius: 8px;
  border-color: transparent;

  &:hover {
    background-color: ${props => props.theme.violetColors.hoverViolet};
  }

  @media screen and (min-width: 768px) {
    width: 302px;
  }
`;

export const IconWhiteWrap = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.radius.m};
`;

export const IconVioletWrap = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background-color: ${props => props.theme.violetColors.hoverViolet};
  border-radius: ${props => props.theme.radius.m};
`;

export const StyledSvgWhitePlus = styled.svg`
  fill: ${props => props.theme.colors.white};
  stroke: ${props => props.theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  border: none;
`;

export const StyledSvgDarkPlus = styled.svg`
  fill: ${props => props.theme.colors.darkTextColor};
  stroke: ${props => props.theme.colors.darkTextColor};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  border: none;
`;
