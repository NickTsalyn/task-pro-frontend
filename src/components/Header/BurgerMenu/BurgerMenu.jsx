import sprite from '../../../images/icons.svg';
import { StyledBurgerMenu, StyledSVGBurger } from './BurgerMenu.styled';

export const BurgerMenu = () => {

  const hendleOpenMenu = () => {
    
  };

  return (
    <StyledBurgerMenu type="button" onClick={() => hendleOpenMenu}>
      <StyledSVGBurger>
        <use xlinkHref={`${sprite}#icon-menu-01`}></use>
      </StyledSVGBurger>
    </StyledBurgerMenu>
  );
};
