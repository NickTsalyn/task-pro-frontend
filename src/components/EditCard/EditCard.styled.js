import { Field, Form } from 'formik';

import { styled } from 'styled-components';

const getColor = props => {
  switch (props.value) {
    case 'Low':
      return props.theme.priorityColors.low;
    case 'Medium':
      return props.theme.priorityColors.medium;
    case 'High':
      return props.theme.priorityColors.high;
    default:
      return props.theme.priorityColors.without;
  }
};

export const EditCardWrapper = styled(Form)`
  padding: 24px;
  display: flex;
  flex-direction: column;

  width: 287px;
  background-color: ${p => p.theme.currentTheme.taskBgn};
`;
export const EditCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const EditCardHeader = styled.h3`
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: ${p => p.theme.currentTheme.mainText};
  width: 100%;
`;

export const EditCardTextCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
export const EditCardTitle = styled(Field)`
  width: 100%;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  padding: 14px 18px;
  border-radius: ${p => p.theme.radius.m};
  border: 1px solid ${p => p.theme.currentTheme.accent};
  background: ${p => p.theme.currentTheme.inputBgn};
  color: ${p => p.theme.currentTheme.mainText};
  opacity: 0.4;
  outline: none;
  box-shadow: 0px 4px 16px 0px ${p => p.theme.colors.shadowColor};
  box-sizing: border-box;
  &::placeholder {
    font-size: 14px;
    color: ${p => p.theme.currentTheme.mainText};
    letter-spacing: -0.02em;
  }
  &:focus {
    opacity: 1;
  }
`;
export const EditCardDescription = styled.textarea`
  width: 100%;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  padding: 14px 18px;
  border-radius: ${p => p.theme.radius.m};
  border: 1px solid ${p => p.theme.currentTheme.accent};
  background: ${p => p.theme.currentTheme.inputBgn};
  color: ${p => p.theme.currentTheme.mainText};
  opacity: 0.4;
  outline: none;
  box-shadow: 0px 4px 16px 0px ${p => p.theme.colors.shadowColor};
  box-sizing: border-box;
  resize: none;
  &::placeholder {
    font-size: 14px;
    color: ${p => p.theme.currentTheme.mainText};
  }
  &:focus {
    opacity: 1;
  }
`;
export const EditCardColorCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const EditCardLabelText = styled.p`
  padding: 0;
  margin: 0;
  font-size: 12px;
  letter-spacing: -0.02em;
  color: ${p => p.theme.currentTheme.grayText};
`;
export const EditCardInputColor = styled(Field)`
  position: absolute;
  opacity: 0;
  left: 90%;

  + .radio-label {
    &:before {
      content: '';
      background-color: ${props => getColor(props)};
      border-radius: 100%;
      border: 1px solid ${props => getColor(props)};
      display: inline-block;
      width: 14px;
      height: 14px;
      position: relative;

      cursor: pointer;
      text-align: center;
      transition: all 250ms ease;
    }
  }
  &:checked {
    + .radio-label {
      &:before {
        background-color: ${props => getColor(props)};
        box-shadow: inset 0 0 0 4px white;
      }
    }
  }
`;
export const EditCardContMark = styled.div`
  display: flex;
  gap: 8px;
`;

export const EditCardBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: ${p => p.theme.currentTheme.accent};
  border-radius: 8px;
  border-color: transparent;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -2%;
`;
export const EditCardContCal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const EditCardOptionCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 40px;
`;
export const EditCardTextCal = styled.p`
  padding: 0;
  margin: 0;
  font-size: 12px;
  letter-spacing: -0.02em;
  color: ${p => p.theme.currentTheme.grayText};
`;

export const EditCardSvgContainer = styled.span`
  display: flex;
  align-items: 'center';
  justify-content: center;
  border-radius: 4px;

  width: 28px;
  height: 28px;
  background-color: ${p => p.theme.currentTheme.plusIconFill};
`;

export const EditCardButtonSvg = styled.svg`
  fill: ${p => p.theme.currentTheme.plusIconFill};
  stroke: ${p => p.theme.currentTheme.plusIconStroke};

  width: 14px;
  height: 14px;
  margin: auto;
`;
export const EditCardSvgButtonText = styled.p`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${p => p.theme.currentTheme.plusIconFill};
  padding: 0;
  margin: 0;
`;

export const EditCardSvgClose = styled.svg`
  fill: ${p => p.theme.currentTheme.plusIconFill};
  stroke: ${p => p.theme.currentTheme.plusIconStroke};
  width: 18px;
  height: 18px;
`;
