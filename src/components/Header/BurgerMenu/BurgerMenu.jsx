import { useEffect, useRef, useState } from 'react';
import sprite from '../../../images/icons.svg';
import { BurgerMenuWrapper,  StyledBurgerMenu, StyledSVGBurger } from './BurgerMenu.styled';
import { Sidebar } from 'components/Sidebar/Sidebar';

export const BurgerSidebar = () => {
  const [isOpen, setOpen] = useState(false);
  const burgerSidebarRef = useRef(null);

  const hendleOpenSidebar = () => {
    setOpen(!isOpen);
  };

  //  const handleClickOutside = (event) => {
  //   if (burgerSidebarRef.current && !burgerSidebarRef.current.contains(event.target)) {
  //      setOpen(false);
  //   }
  // };

  // const hendleOpenSidebar = () => {
  //   setOpen(!isOpen);
  // };


  // useEffect(() => { 
  //   const handleClickOutside = (event) => {
  //     if (burgerSidebarRef.current && !burgerSidebarRef.current.contains(event.target)) {
  //        setOpen(false);
  //     }
  //   };

  //   document.addEventListener('mousedown', handleClickOutside);

  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, [burgerSidebarRef]);

  

  useEffect(() => {

const handleClickClose = event => {
    if (burgerSidebarRef.current && !burgerSidebarRef.current.contains(event.target)) {
 setOpen(false);
    }
     
  };

    document.addEventListener('mousedown', handleClickClose);

    return () => 
      document.removeEventListener('mousedown', handleClickClose);
  }, []);

  return (
    <BurgerMenuWrapper>
      <StyledBurgerMenu type="button" isOpen={isOpen} onClick={hendleOpenSidebar} ref={burgerSidebarRef}>
        <StyledSVGBurger>
          <use xlinkHref={`${sprite}#icon-menu-01`}></use>
        </StyledSVGBurger>
      </StyledBurgerMenu>
      {/* <Sidebar ref={burgerSidebarRef} isOpen={isOpen}/> */}
      {isOpen && (< Sidebar />)}
      {/* {isOpen && <Sidebar isOpen={isOpen} />} */}
    </BurgerMenuWrapper>
  );
};
