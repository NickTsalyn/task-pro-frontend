import styled from 'styled-components';

export const DarkBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(21, 21, 21, 0.3);
  z-index: 10;
`;

export const StyledSidebar = styled.aside`
  width: 197px;
  background-color: ${p => p.theme.violetColors.accentColor};
  padding: 14px;
  z-index: 99;
  position: absolute;
  left: 0;
  height: 100vh;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  
  @media screen and (min-width: 768px) {
    width: 212px;
    padding: 24px;
  }

  @media screen and (min-width: 1440px) {
    z-index: 0;
    position: static;
  }
`;
