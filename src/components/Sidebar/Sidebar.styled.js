import styled from 'styled-components';

export const DarkBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(21, 21, 21, 0.3);
  z-index: 9999;
`;

export const StyledSidebar = styled.aside`
  width: 225px;
  height: 100vh;
  background-color: ${p => p.theme.violetColors.accentColor};
  /* padding: 14px; */
  /* padding-bottom: 0; */
  z-index: 9999;
  position: absolute;
  top: 0;
  left: 0;
  
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
flex-direction: column;;
/* gap: 70px; */

  @media screen and (min-width: 768px) {
    width: 260px;
    /* gap: 60px; */
  }

  @media screen and (min-width: 1440px) {
    z-index: 0;
    position: static;
    top: 0;
    left: 0;
  }
`;
