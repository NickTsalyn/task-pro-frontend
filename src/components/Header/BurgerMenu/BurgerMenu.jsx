import sprite from '../../../images/icons.svg';
import { StyledBurgerMenu, StyledSVGBurger } from './BurgerMenu.styled';

export const BurgerMenu = () => {
  return (
    <StyledBurgerMenu type="button">
      <StyledSVGBurger>
        <use xlinkHref={`${sprite}#icon-menu-01`}></use>
      </StyledSVGBurger>
    </StyledBurgerMenu>
  );
};
