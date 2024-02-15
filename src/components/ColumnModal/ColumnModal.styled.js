import styled from 'styled-components';

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 18px;
  height: 18px;
  border-color: transparent;
  background-color: ${p => p.theme.currentTheme.inputBgn};
  transition: stroke 0.3s;
`;
export const StyledSvgClose = styled.svg`
  fill: ${p => p.theme.currentTheme.mainText};
  stroke: ${p => p.theme.currentTheme.mainText};
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  border: none;
  transition: background-color 0.3s ease;
`;

export const ModalWrap = styled.div`
  width: 335px;
  padding: 24px;
  background-color: ${p => p.theme.currentTheme.modalBgn};

  box-sizing: border-box;
  border-radius: ${p => p.theme.radius.m};

  width: 335px;
  padding: ${p => p.theme.spacing(6)};

  box-shadow: 0 4px 16px 0 rgba(22, 22, 22, 0.05);

  position: relative;
  @media screen and (min-width: 768px) {
    width: 350px;
    padding: 24px;
  }
`;
