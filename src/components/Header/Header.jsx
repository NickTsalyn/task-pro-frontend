import { Sidebar } from 'components/Sidebar/Sidebar';
import { BurgerMenu,  } from './BurgerMenu/BurgerMenu';
import { StyledHeader, StyledHeaderItemWrapper, StyledHeaderWrapper } from './Header.styled';
import { ThemeDropDown } from './ThemeDropDown/ThemeDropDown';
import { UserInfo } from './UserInfo/UserInfo';
import { useEffect, useState } from 'react';

export const Header = () => {
  // const isWideScreen = window.innerWidth >= 1440;

  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 1440);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 1440);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (

    <StyledHeaderWrapper>
      { isWideScreen && <Sidebar/>}
      {/* {<Sidebar/>} */}
      
        <StyledHeader>
      <BurgerMenu />
      <StyledHeaderItemWrapper>
        <ThemeDropDown />
      <UserInfo />
      </StyledHeaderItemWrapper>
      
    </StyledHeader>
    </StyledHeaderWrapper>
  );
};
