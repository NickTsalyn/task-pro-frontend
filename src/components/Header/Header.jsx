import { Sidebar } from 'components/Sidebar/Sidebar';
import { BurgerMenu } from './BurgerMenu/BurgerMenu';
import { StyledHeader, StyledHeaderWrapper } from './Header.styled';
import { ThemeDropDown } from './ThemeDropDown/ThemeDropDown';
import { UserInfo } from './UserInfo/UserInfo';

export const Header = () => {
  return (

    <StyledHeaderWrapper>
      <Sidebar/>
        <StyledHeader>
      <BurgerMenu />
      <ThemeDropDown />
      <UserInfo />
    </StyledHeader>
    </StyledHeaderWrapper>
  );
};