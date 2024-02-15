import { SelectLanguage } from 'components/SelectLanguage/SelectLanguage';
import { BurgerMenu } from './BurgerMenu/BurgerMenu';
import { StyledHeader, StyledHeaderItemWrapper } from './Header.styled';
import { ThemeDropDown } from './ThemeDropDown/ThemeDropDown';
import { UserInfo } from './UserInfo/UserInfo';

export const Header = () => {
  return (
    <StyledHeader>
      <BurgerMenu />
      <StyledHeaderItemWrapper>
        <SelectLanguage />
        <ThemeDropDown />
        <UserInfo />
      </StyledHeaderItemWrapper>
    </StyledHeader>
  );
};
