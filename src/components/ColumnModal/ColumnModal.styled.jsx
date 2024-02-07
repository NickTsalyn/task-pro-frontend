import styled from 'styled-components';

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 18px;
  height: 18px;
  border-color: transparent;
  background-color: #fcfcfc;
  transition: stroke 0.3s;
`;
export const StyledSvgClose = styled.svg`
  fill: ${props => props.theme.colors.darkTextColor};
  stroke: ${props => props.theme.colors.darkTextColor};
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 12px;
  height: 12px;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  border: none;
  transition: background-color 0.3s ease;
`;
