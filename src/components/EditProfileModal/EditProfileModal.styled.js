import { ErrorMessage, Form, Field } from 'formik';
import styled from 'styled-components';

export const ModalWrap = styled.div`
  box-sizing: border-box;
  border-radius: ${props => props.theme.radius.m};

  width: 335px;
  padding: ${p => p.theme.spacing(6)};

  box-shadow: 0 4px 16px 0 rgba(22, 22, 22, 0.05);
  background-color: #fcfcfc;

  position: relative;

  @media only screen and (min-width: 768px) {
    width: 400px;
  }
`;
export const CLoseButton = styled.button`
  width: 18px;
  height: 18px;
  border: none;
  padding: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 14px;
  right: 14px;

  background-color: transparent;
`;
export const IconClose = styled.svg`
  width: 18px;
  height: 18px;
  border: none;
  padding: 0;

  stroke: ${props => props.theme.colors.darkTextColor};
  stroke-width: 1.5px;
`;

export const TitleModal = styled.h4`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: ${props => props.theme.colors.darkTextColor};
  margin-bottom: ${p => p.theme.spacing(6)};
`;

export const ProfileFotoBox = styled.div`
  width: 68px;
  height: 78px;

  margin: 0 auto ${p => p.theme.spacing(3.5)};
  position: relative;
`;

export const AddButton = styled.button`
  width: 24px;
  height: 24px;

  border: 0;
  border-radius: ${props => props.theme.radius.s};
  background-color: #ecedfd;

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

  --color2: ${props => props.theme.colors.white};
  --color1: #ecedfd;
`;
export const ImageUser = styled.img`
  width: 68px;
  height: 68px;

  position: absolute;
  top: 0;
  left: 0;
`;
export const IconPlus = styled.svg`
  width: 10px;
  height: 10px;

  stroke: ${props => props.theme.colors.darkTextColor};
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 14px;
  margin: 0 auto;
`;

export const StyledLabel = styled.label`
  position: relative;
`;

export const StyledField = styled(Field)`
  border: 1px solid ${props => props.theme.violetColors.accentColor};
  border-radius: ${props => props.theme.radius.m};
  padding: ${p => p.theme.spacing(3.5)} ${p => p.theme.spacing(9.5)}
    ${p => p.theme.spacing(3.5)} ${p => p.theme.spacing(4.5)};
  opacity: 0.4;
  outline: none;
  width: 100%;
  height: 49px;

  background-color: inherit;
  color: ${props => props.theme.colors.darkTextColor};

  &:focus {
    opacity: 1;
  }
  box-sizing: border-box;
  display: inline;
`;

export const Button = styled.button`
  border: 0;
  border-radius: ${props => props.theme.radius.m};

  background-color: ${props => props.theme.violetColors.accentColor};
  color: ${props => props.theme.colors.white};

  font-weight: 500;
  width: 100%;
  padding: ${p => p.theme.spacing(3.5)} ${p => p.theme.spacing(4.5)};
  margin-top: ${p => p.theme.spacing(2.5)};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

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
  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    stroke: ${props => props.theme.violetColors.hoverViolet};
  }
`;
