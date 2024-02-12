import styled from 'styled-components';
import { Form } from 'formik';
import { getTheme } from '../../components/themes';

export const ProjectName = styled.div`
  color: ${p => getTheme(p.theme.selectedTheme).mainText};
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  margin-left: 24px;
  margin-top: 10px;
`;

export const IconTextContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.svg`
  stroke: ${p => getTheme(p.theme.selectedTheme).grayText};
  width: 16px;
  height: 16px;
  stroke-width: 1.5px;
  transition: all 250ms linear;
  fill: transparent;
`;

export const Text = styled.span`
  color: ${p => getTheme(p.theme.selectedTheme).grayText};
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02px;
`;

export const Button = styled.button`
  position: absolute;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
  top: 14px;
  right: 24px;

  &:hover {
    opacity: 0.8;
    transform: scale(1.2);
    transition: all 250ms ease-in-out;
    stroke: ${p => getTheme(p.theme.selectedTheme).accent};

    ${Icon} {
      stroke: ${p => getTheme(p.theme.selectedTheme).accent};
    }

    ${Text} {
      color: ${p => getTheme(p.theme.selectedTheme).accent};
    }
  }
`;

export const Section = styled.div`
  position: relative;
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
  stroke: ${p => getTheme(p.theme.selectedTheme).plusIconFill};
  stroke-width: 1.5px;

  &:hover {
    opacity: 0.8;
    scale: 1.2;
  }
`;

export const SectionTitle = styled.h4`
  color: ${p => getTheme(p.theme.selectedTheme).mainText};
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.02em;
  margin-bottom: 14px;
`;

export const Line = styled.div`
  border-top: 1px solid ${p => getTheme(p.theme.selectedTheme).horizontScroll};
  margin-bottom: 14px;
`;

export const FormWraper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
`;

export const FormTitle = styled.span`
  color: ${p => getTheme(p.theme.selectedTheme).mainText};
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.02em;
`;

export const ShowAllLabel = styled.p`
  color: ${p => getTheme(p.theme.selectedTheme).grayText};
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
          box-shadow: inset 0 0 0 4px white;
        }
      }
    }
    &:checked + .radio-label {
      color: ${p => getTheme(p.theme.selectedTheme).mainText};
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
      color: ${p => getTheme(p.theme.selectedTheme).grayText};

      &:empty {
        &:before {
          margin-right: 0;
        }
      }
    }
  }
`;
