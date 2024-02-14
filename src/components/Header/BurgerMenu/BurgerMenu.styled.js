import styled from 'styled-components';

export const BurgerMenuWrapper = styled.div`
  display: flex;
  /* @media screen and (max-width: 375px) {
    padding-left: ${p => p.theme.spacing(5)};
  } */
`;

export const StyledBurgerMenu = styled.button`
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  margin: auto 0;
  padding: 0;
  position: relative;
  display: ${props => (props.isOpen ? 'display: flex;' : '')};

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const StyledSVGBurger = styled.svg`
  stroke: rgb(22, 22, 22);
  width: 100%;
  height: 100%;
`;
