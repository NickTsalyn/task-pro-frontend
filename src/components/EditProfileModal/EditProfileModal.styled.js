import { ErrorMessage, Form, Field } from 'formik';
import styled from 'styled-components';

export const ModalWrap = styled.div`
  border-radius: ${props => props.theme.radius.m};
  width: 335px;
  height: 440px;
  padding: 24px;

  box-shadow: 0 4px 16px 0 rgba(22, 22, 22, 0.05);
  background: #fcfcfc;
`;

export const TitleModal = styled.h4`
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: ${props => props.theme.colors.darkTextColor};
  margin-bottom: 24px;
`;

export const ProfileFotoBox = styled.div`
  width: 68px;
  height: 78px;

  margin: 0 auto 14px;
  position: relative;
`;

export const SvgPlusBox = styled.div`
  width: 24px;
  height: 24px;

  border: 0;
  border-radius: ${props => props.theme.radius.s};
  background: #ecedfd;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 65%);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconUser = styled.svg`
  width: 68px;
  height: 68px;
  stroke-width: 0;
  stroke: ${props => props.theme.colors.darkTextColor};
  fill: #ecedfd;
  /* margin-right: ${p => p.theme.spacing(4)}; */
`;
export const IconPlus = styled.svg`
  width: 10px;
  height: 10px;

  stroke: ${props => props.theme.colors.darkTextColor};
  /* margin-right: ${p => p.theme.spacing(4)}; */
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 287px;
  gap: 14px;
  margin: 0 auto;

  /* :nth-last-child(2) {
    margin-bottom: 10px;
  } */
`;

export const StyledLabel = styled.label`
  position: relative;
`;

export const StyledField = styled(Field)`
  border: 1px solid ${props => props.theme.violetColors.accentColor};
  border-radius: ${props => props.theme.radius.m};
  padding: 14px 38px 14px 18px;
  opacity: 0.4;
  outline: none;
  width: 100%;
  height: 49px;

  background: inherit;
  color: ${props => props.theme.colors.darkTextColor};

  &:focus {
    opacity: 1;
  }
  box-sizing: border-box;
`;

export const Button = styled.button`
  border: 0;
  border-radius: ${props => props.theme.radius.m};

  background-color: ${props => props.theme.violetColors.accentColor};
  color: ${props => props.theme.colors.white};

  font-weight: 500;
  width: 100%;
  padding: 14px 18px;
  margin-top: 10px;

  &:hover {
    background-color: ${props => props.theme.violetColors.hoverViolet};
  }
`;

export const ErrMessage = styled(ErrorMessage)`
  font-size: 10px;
  color: red;
  position: absolute;
  left: 18px;
  top: 50px;
  color: #c04d4d;
  z-index: 100;
`;

export const HideBtn = styled.button`
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 18%;
  right: 18px;
  appearance: none;

  background: none;
  border: none;
  cursor: pointer;
`;
export const IconEye = styled.svg`
  width: 18px;
  height: 18px;
  fill: #fcfcfc;
  stroke: ${props => props.theme.colors.darkTextColor};
  opacity: 0.4;
  stroke-width: 1.3px;

  &:hover {
    stroke: ${props => props.theme.violetColors.hoverViolet};
  }
  /* margin-right: ${p => p.theme.spacing(4)}; */
`;
