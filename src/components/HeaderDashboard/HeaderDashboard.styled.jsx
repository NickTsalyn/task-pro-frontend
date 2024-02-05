import styled from 'styled-components';
import { Form, Field } from 'formik';

export const Icon = styled.svg`
  width: 18px;
  height: 18px;
  fill: red;
  transition: all 250ms linear;
  fill: transparent;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

export const SectionTitle = styled.h2`
  font-size: 18px;
  font-family: 'Poppins';
  font-weight: 500;
  letter-spacing: -0.36px;
  margin-bottom: 14px;
`;

export const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  margin-bottom: 24px;

  &:first-of-type {
    padding-top: 14px;
    padding-bottom: 14px;
  }

  &:last-of-type {
    position: relative;
    margin-bottom: 0;
  }
`;

export const FormTitle = styled.h3`
  font-size: 14px;
  font-family: 'Poppins';
  font-weight: 500;
  letter-spacing: -0.28px;
  margin-bottom: 14px;
`;

export const BgWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 252px;
  gap: 4px;
`;

export const BgItem = styled.div`
  border-radius: 8px;
  border: none;
  outline: none;
  width: 28px;
  height: 28px;

  background-position: center;
  background-size: contain;

  cursor: pointer;
  transition: all 250ms linear;

  &.active {
    scale: 1.1;
  }
`;

export const CustomRadioBtn = styled.div`
  border-radius: 8px;
  width: 28px;
  height: 28px;

  background-position: center;
  background-size: cover;

  cursor: pointer;

  transition: all 250ms linear;

  &.active {
    scale: 1.1;
  }
`;

export const DefaultRadioBtn = styled(Field)`
  appearance: none;
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const ShowAllLabel = styled.p`
  font-size: 12px;
  font-family: Poppins;
  letter-spacing: -0.24px;
  text-decoration-line: underline;
  cursor: pointer;

  position: absolute;
  top: 2px;
  right: 0;
`;

export const RadioBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  gap: 12px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  width: 16px;
  height: 14px;
  border-radius: 14px;

  cursor: pointer;
`;

export const LabelItem = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 14px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  transition: all 250ms linear;

  &.active {
    width: 6px;
    height: 6px;
  }
`;

export const LabetlText = styled.p`
  display: block;
  width: 100%;

  font-size: 12px;
  font-family: Poppins;
  letter-spacing: -0.24px;

  cursor: pointer;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ModalForm = styled(Form)`
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
