import { useEffect, useRef, useState } from 'react';
import sprite from '../../../images/icons.svg';
import { BurgerMenuWrapper,  StyledBurgerMenu, StyledSVGBurger } from './BurgerMenu.styled';
import { Sidebar } from 'components/Sidebar/Sidebar';

export const BurgerMenu = () => {
  const [isOpen, setOpen] = useState(false);
  const burgerMenuRef = useRef(null);
  const sidebarRef = useRef(null);

  const hendleOpenSidebar = () => {
    setOpen(!isOpen);
  };

  useEffect(() => {

const handleClickClose = (event) => {
    if (
      burgerMenuRef.current && !burgerMenuRef.current.contains(event.target) && 
    sidebarRef.current && !sidebarRef.current.contains(event.target)) {
 setOpen(false);
    }
     
  };

    document.addEventListener('click', handleClickClose);

    return () => 
      document.removeEventListener('click', handleClickClose);
  }, []);

  return (
    <BurgerMenuWrapper>
      <StyledBurgerMenu type="button"  onClick={hendleOpenSidebar} isOpen={isOpen} ref={burgerMenuRef}>
        <StyledSVGBurger>
          <use xlinkHref={`${sprite}#icon-menu-01`}></use>
        </StyledSVGBurger>
      </StyledBurgerMenu>
      {isOpen && (< Sidebar ref={sidebarRef}/>)}
    </BurgerMenuWrapper>
  );
};
