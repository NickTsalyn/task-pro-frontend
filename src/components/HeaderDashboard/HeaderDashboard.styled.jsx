import styled from 'styled-components';
import { Form } from 'formik';
import { Modal } from 'antd';

export const CustomModal = styled(Modal)`
  position: absolute;
  width: 300px !important;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .ant-modal-content {
    background-color: ${p => p.theme.currentTheme.modalBgn};
    button {
      color: ${p => p.theme.currentTheme.modalFiltersIconClose};
    }
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${p => p.theme.currentTheme.modalBgn};
`;

export const HdWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
`;

export const ProjectName = styled.div`
  color: ${p => p.theme.currentTheme.mainText};
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  padding-top: 10px;
`;

export const IconTextContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.svg`
  stroke: ${p => p.theme.currentTheme.filterText};
  width: 16px;
  height: 16px;
  stroke-width: 1.5px;
  transition: all 250ms linear;
  fill: transparent;
  margin-right: 8px;
`;

export const Text = styled.span`
  color: ${p => p.theme.currentTheme.filterText};
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
  padding: 0px;
  height: 100%;
  margin-top: 14px;

  &:hover {
    opacity: 0.8;
    transform: scale(1.2);
    transition: all 250ms ease-in-out;
    stroke: ${p => p.theme.currentTheme.accent};

    ${Icon} {
      stroke: ${p => p.theme.currentTheme.accent};
    }

    ${Text} {
      color: ${p => p.theme.currentTheme.accent};
    }
  }
`;

export const Section = styled.div`
  /* position: relative; */
  display: flex;
  flex-direction: column;
  padding: 4px;
`;

export const CloseModal = styled.svg`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 18px;
  height: 18px;
  cursor: pointer;
  transition: all 250ms linear;
  stroke: ${p => p.theme.currentTheme.mainText};
  stroke-width: 1.5px;

  &:hover {
    opacity: 0.8;
    scale: 1.2;
  }
`;

export const SectionTitle = styled.h4`
  color: ${p => p.theme.currentTheme.mainText};
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.02em;
  margin-bottom: 14px;
`;

export const Line = styled.div`
  border-top: 1px solid ${p => p.theme.currentTheme.line};
  margin-bottom: 14px;
`;

export const FormWraper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
`;

export const FormTitle = styled.span`
  color: ${p => p.theme.currentTheme.iconStroke};
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.02em;
`;

export const ShowAllLabel = styled.p`
  color: ${p => p.theme.currentTheme.textModal};

  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.02em;
  text-decoration-line: underline;
  cursor: pointer;
  text-decoration-skip-ink: none;

  &:hover {
    opacity: 0.8;
    scale: 1.2;
  }
`;

export const RadioBtnWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  gap: 8px;
`;

export const CheckboxContainer = styled.div`
  $priority: ${props => props.priority};
  font-size: 12px;
  letter-spacing: -0.02em;

  input[type='checkbox'] {
    position: absolute;
    opacity: 0;

    + .radio-label {
      &:before {
        content: '';
        background-color: ${p => {
          if (p.priority === 'without') {
            return p.theme.currentTheme.withoutbl;
          }
          if (p.priority === 'low') {
            return p.theme.priorityColors.low;
          }
          if (p.priority === 'medium') {
            return p.theme.priorityColors.medium;
          }
          if (p.priority === 'high') {
            return p.theme.priorityColors.high;
          }
        }};
        border-radius: 100%;
        border: 1px solid
          ${p => {
            if (p.priority === 'without') {
              return p.theme.priorityColors.without;
            }
            if (p.priority === 'low') {
              return p.theme.priorityColors.low;
            }
            if (p.priority === 'medium') {
              return p.theme.priorityColors.medium;
            }
            if (p.priority === 'high') {
              return p.theme.priorityColors.high;
            }
          }};
        display: inline-block;
        width: 1.4em;
        height: 1.4em;
        position: relative;
        top: -0.2em;
        margin-right: 1em;
        vertical-align: top;
        cursor: pointer;
        text-align: center;
        transition: all 250ms ease;
      }
    }
    &:checked {
      + .radio-label {
        &:before {
          background-color: ${p => {
            if (p.priority === 'without') {
              return p.theme.priorityColors.withoutbl;
            }
            if (p.priority === 'low') {
              return p.theme.priorityColors.low;
            }
            if (p.priority === 'medium') {
              return p.theme.priorityColors.medium;
            }
            if (p.priority === 'high') {
              return p.theme.priorityColors.high;
            }
          }};
          box-shadow: inset 0 0 0 4px white;
        }
      }
    }
    &:checked + .radio-label {
      color: ${p => p.theme.currentTheme.mainText};
    }
    &:focus {
      + .radio-label {
        &:before {
          outline: none;
          border-color: ${p => {
            if (p.priority === 'without') {
              return p.theme.priorityColors.without;
            }
            if (p.priority === 'low') {
              return p.theme.priorityColors.low;
            }
            if (p.priority === 'medium') {
              return p.theme.priorityColors.medium;
            }
            if (p.priority === 'high') {
              return p.theme.priorityColors.high;
            }
          }};
        }
      }
    }

    + .radio-label {
      color: ${p => p.theme.currentTheme.textModal};

      &:empty {
        &:before {
          margin-right: 0;
        }
      }
    }
  }
`;
