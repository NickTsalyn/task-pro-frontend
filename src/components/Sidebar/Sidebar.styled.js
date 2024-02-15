import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

export const DarkBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(21, 21, 21, 0.3);
  z-index: 999;
`;

export const StyledSidebar = styled.aside`
  width: 225px;
  height: 100vh;
  background-color: ${p => p.theme.currentTheme.sidebarBgn};
  z-index: 999;
  position: absolute;
  top: 0;
  left: 0;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    width: 260px;
  }
  ${() => {
    const { i18n } = useTranslation('global');
    const dir = i18n.dir(i18n.language);

    if (dir === 'rtl') {
      return `
        right: 0;
        left: auto;
      `;
    } else {
      return `
        left: 0;
        right: auto;
      `;
    }
  }}
  @media screen and (min-width: 1440px) {
    z-index: 0;
    position: static;
    top: 0;
    left: 0;
  }
`;
