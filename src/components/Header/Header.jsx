import { BurgerMenu } from './BurgerMenu/BurgerMenu';
import { StyledHeader } from './Header.styled';
import { ThemeDropDown } from './ThemeDropDown/ThemeDropDown';
import { UserInfo } from './UserInfo/UserInfo';

export const Header = () => {
  return (
    <StyledHeader>
      <BurgerMenu />
      <ThemeDropDown />
      <UserInfo />
    </StyledHeader>
  );
};
