import styled from 'styled-components';
import { Form, Field } from 'formik';
// import { getTheme } from './themes';
import { getTheme } from '../../components/themes';

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
`;

export const Icon = styled.svg`
  width: 16px;
  height: 16px;
  stroke: rgba(22, 22, 22, 0.8);
  transition: all 250ms linear;
  fill: transparent;
`;

export const Text = styled.span`
  color: ${p => getTheme(p.theme.selectedTheme).btnPlusStroke};
  /* color: rgba(22, 22, 22, 0.8); */
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02px;
`;

export const Section = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 24px;
`;

export const CloseModal = styled.svg`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 18px;
  height: 18px;
  cursor: pointer;
  transition: all 250ms linear;
  stroke: rgba(22, 22, 22, 0.8);
  stroke-width: 1.5px;

  &:hover {
    opacity: 0.8;
    scale: 1.2;
  }
`;

export const SectionTitle = styled.h4`
  color: ${p => getTheme(p.theme.selectedTheme).btnPlusStroke};
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.02em;
  margin-bottom: 14px;
`;

export const FormWraper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
`;

export const FormTitle = styled.span`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.02em;
`;

export const ShowAllLabel = styled.p`
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.02em;
  text-decoration-line: underline;
  cursor: pointer;
  text-decoration-skip-ink: none;
  color: rgba(22, 22, 22, 0.5);
`;

export const RadioBtnWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  gap: 8px;
`;
export const WraperInput = styled.div`
  /* position: relative; */
  display: flex;
  /* gap: 8px; */
  align-items: center;
`;

// export const InputRadio = styled.input`
//   display: none;
//   &:checked {
//     & + label {
//       &:after {
//         transform: scale(1);
//         opacity: 1;
//       }
//       &:before {
//         border: ${p => {
//           if (p.value === 'without') {
//             return p.theme.priorityColors.without;
//           }
//           if (p.value === 'low') {
//             return p.theme.priorityColors.low;
//           }
//           if (p.value === 'medium') {
//             return p.theme.priorityColors.medium;
//           }
//           if (p.value === 'high') {
//             return p.theme.priorityColors.high;
//           }
//         }};
//       }
//     }
//   }
// `;

// export const LabelRadio = styled.label`
//   color: ${p => {
//     if (p.cheked === 'true') {
//       return `#FFFFFF`;
//     }
//     return getTheme(p.theme.selectedTheme).btnPlusStroke;
//   }};
//   margin: 0;
//   display: inline-block;
//   position: relative;

//   &:before {
//     content: '';
//     width: 20px;
//     height: 20px;
//     position: absolute;
//     left: -30px;
//     border: 1px solid
//       ${p => {
//         if (p.value === 'without') {
//           return p.theme.priorityColors.without;
//         }
//         if (p.value === 'low') {
//           return p.theme.priorityColors.low;
//         }
//         if (p.value === 'medium') {
//           return p.theme.priorityColors.medium;
//         }
//         if (p.value === 'high') {
//           return p.theme.priorityColors.high;
//         }
//       }};
//     top: 50%;
//     background: #fff;
//     margin-top: -10px;
//     border-radius: 50%;
//   }
//   &:after {
//     background: ${p => {
//       if (p.value === 'without') {
//         return p.theme.priorityColors.without;
//       }
//       if (p.value === 'low') {
//         return p.theme.priorityColors.low;
//       }
//       if (p.value === 'medium') {
//         return p.theme.priorityColors.medium;
//       }
//       if (p.value === 'high') {
//         return p.theme.priorityColors.high;
//       }
//     }};
//     transition: 0.3s;
//     transform: scale(3.4);
//     opacity: 0;
//     margin-top: -7px;
//     width: 10px;
//     height: 10px;
//     border-radius: 50%;
//     content: '';
//     position: absolute;
//     top: 11px;
//     left: -24px;
//   }
// `;

// export const InputRadio = styled.input`
//   position: absolute;
//   z-index: -1;
//   opacity: 0;

//   &:not(:disabled):not(:checked):hover + label::before {
//     border-color: #b3d7ff;
//   }

//   &:not(:disabled):active + label::before {
//     background-color: #b3d7ff;
//     border-color: #b3d7ff;
//   }

//   &:focus + label::before {
//     box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
//   }

//   &:focus:not(:checked) + label::before {
//     border-color: #80bdff;
//   }

//   &:checked + label::before {
//     border-color: #0b76ef;
//     background-color: #0b76ef;
//     background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
//   }

//   &:disabled + label::before {
//     background-color: #e9ecef;
//   }
// `;

// export const LabelRadio = styled.label`
//   display: inline-flex;
//   align-items: center;
//   user-select: none;

//   &::before {
//     content: '';
//     display: inline-block;
//     width: 1em;
//     height: 1em;
//     flex-shrink: 0;
//     flex-grow: 0;
//     border: 1px solid #adb5bd;
//     border-radius: 50%;
//     margin-right: 0.5em;
//     background-repeat: no-repeat;
//     background-position: center center;
//     background-size: 50% 50%;
//   }
// `;

export const CheckboxContainer = styled.div`
  margin: 0.5rem;
  input[type='checkbox'] {
    position: absolute;
    opacity: 0;
    + .radio-label {
      &:before {
        content: '';
        background: $color1;
        border-radius: 100%;
        border: 1px solid green;
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
          background-color: red;
          box-shadow: inset 0 0 0 4px yellow;
        }
      }
    }
    &:checked + .radio-label {
      color: green;
    }
    &:focus {
      + .radio-label {
        &:before {
          outline: none;
          border-color: blue;
        }
      }
    }

    + .radio-label {
      &:empty {
        &:before {
          margin-right: 0;
        }
      }
    }
  }
`;
