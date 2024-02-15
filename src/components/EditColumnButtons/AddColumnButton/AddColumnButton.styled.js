import styled from 'styled-components';
import { Button } from '../Button';

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
  background-color: ${p => p.theme.currentTheme.horizontScrollBgn};
  color: ${p => p.theme.currentTheme.mainText};
  border-radius: ${p => p.theme.radius.m};
  border: 0;
  border-color: ${p => p.theme.currentTheme.btnPlusStroke};
  filter: drop-shadow(0 0 7px rgba(22, 22, 22, 0.08));
  transition: background-color 0.3s;
  &:hover {
    opacity: 0.8;
  }
`;

export const AddColumnTitle = styled.p`
  color: ${p => p.theme.currentTheme.mainText};
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
  border-radius: ${p => p.theme.radius.m};
  border: 1px solid ${p => p.theme.currentTheme.accent};
  box-shadow: 0 4px 16px 0 ${p => p.theme.colors.shadowColor};
  background-color: transparent;
  color: ${p => p.theme.currentTheme.mainText};
  letter-spacing: -0.32px;
  &:focus {
    opacity: 1;
    outline: 1px solid ${p => p.theme.currentTheme.accent};
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
  background-color: ${p => p.theme.currentTheme.accent};
  color: ${p => p.theme.currentTheme.btnPlusStroke};
  border-radius: 8px;
  border-color: transparent;

  &:hover {
    background-color: ${p => p.theme.currentTheme.hoverButton};
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
  background-color: ${p => p.theme.currentTheme.btnPlusStroke};
  border-radius: ${p => p.theme.radius.m};
`;

export const IconVioletWrap = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background-color: ${p => p.theme.currentTheme.hoverButton};
  border-radius: ${p => p.theme.radius.m};
`;

export const StyledSvgWhitePlus = styled.svg`
  fill: ${p => p.theme.currentTheme.plusIconFill};
  stroke: ${p => p.theme.currentTheme.plusIconFill};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  border: none;
`;

export const StyledSvgDarkPlus = styled.svg`
  fill: ${p => p.theme.currentTheme.plusIconStroke};
  stroke: ${p => p.theme.currentTheme.plusIconStroke};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  border: none;
`;
