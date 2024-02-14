import styled from 'styled-components';
import { Field, Form, ErrorMessage } from 'formik';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

export const StyledSVG = styled(AiOutlineEye)`
  fill: ${p => p.theme.colors.greyTextColor};
  opacity: 0.4;
  cursor: pointer;

  width: 18px;
  height: 18px;
  &:hover,
  &:focus {
    opacity: 1;
  }
`;
export const StyledSVGInv = styled(AiOutlineEyeInvisible)`
  fill: ${p => p.theme.colors.greyTextColor};
  opacity: 0.4;
  cursor: pointer;

  width: 18px;
  height: 18px;
  &:hover,
  &:focus {
    opacity: 1;
  }
`;

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  margin-top: ${p => p.theme.spacing(10)};
  gap: ${p => p.theme.spacing(6)};
`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(3.5)};
`;
export const StyledInput = styled(Field)`
  width: 100%;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  padding: 14px 18px;
  border-radius: ${p => p.theme.radius.m};
  border: 1px solid ${p => p.theme.colors.lightGreen};
  background: ${p => p.theme.colors.darkInputBgn};
  color: ${p => p.theme.colors.white};
  opacity: 0.4;
  outline: none;
  box-shadow: 0px 4px 16px 0px ${p => p.theme.colors.shadowColor};
  box-sizing: border-box;
  &::placeholder {
    font-size: 14px;
    color: ${p => p.theme.colors.greyTextColor};
  }
  &:focus {
    opacity: 1;
  }
`;
export const SendMailBtn = styled.button`
  width: 100%;
  padding-top: ${p => p.theme.spacing(3.5)};
  padding-bottom: ${p => p.theme.spacing(3.5)};
  border: none;
  border-radius: ${p => p.theme.radius.m};
  color: ${p => p.theme.colors.darkTextColor};
  background: ${p => p.theme.colors.lightGreen};
  line-height: 21px;
  letter-spacing: -0.02em;
  transition: background-color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover,
  &:focus {
    background-color: #9dc888;
  }
`;

export const MessageError = styled(ErrorMessage)`
  margin-top: 3px;
  padding-left: 14px;
  color: #c04d4d;
  font-size: 12px;
`;
export const StyledLabel = styled.label`
  position: relative;
`;
export const StyledInputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const StyledSVGButton = styled.button`
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 10px;
  right: 18px;

  background: none;
  border: none;
  cursor: pointer;
`;
