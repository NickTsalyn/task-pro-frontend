import styled from 'styled-components';

export const HelpContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  width: 197px;
  padding: 14px;
  background-color: ${p => p.theme.currentTheme.needHelpBgn};
  border-radius: ${p => p.theme.radius.m};

  @media (min-width: 768px) {
    width: 212px;
    padding: 20px;
  }
`;

export const HelpImage = styled.img`
  max-width: 54px;
  height: 78px;
  margin-bottom: 14px;
  margin-right: 100px;
`;

export const HelpText = styled.p`
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.02em;
  text-align: left;
  color: ${p => p.theme.currentTheme.iconNeedHelp};
  margin-bottom: 18px;
  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const HelpButton = styled.button`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center; 
  border: none;
  margin-right: 11px;
  padding: 0;
  background: transparent;
`;

export const ButtonText = styled.div`
  display: flex;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.02em;
  text-align: left;
  align-items: center;
  cursor: pointer;
  color: ${p => p.theme.currentTheme.iconNeedHelp};
`;

export const QuestionSVG = styled.svg`
  stroke: ${p => p.theme.currentTheme.iconNeedHelp};
  fill: transparent;
  width: 20px;
  height: 20px;
  &:hover,
  &:focus {
    stroke: ${p => p.theme.currentTheme.accent};
  }
`;

export const TaskPro = styled.span`
  color: ${p => p.theme.currentTheme.accent};
  font-size: 12px;
  line-height: 20px;
  letter-spacing: -0.02em;
  text-align: left;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;
