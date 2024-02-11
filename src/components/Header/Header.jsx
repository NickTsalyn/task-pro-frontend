// import { SelectLanguage } from 'components/SelectLanguage/SelectLanguage';
import { BurgerMenu } from './BurgerMenu/BurgerMenu';
import {
  StyledHeader,
  StyledHeaderItemWrapper,
  StyledHeaderWrapper,
} from './Header.styled';
import { ThemeDropDown } from './ThemeDropDown/ThemeDropDown';
import { UserInfo } from './UserInfo/UserInfo';

export const Header = () => {
  return (
    <StyledHeaderWrapper>
      <StyledHeader>
        <BurgerMenu />
        <StyledHeaderItemWrapper>
          {/* <SelectLanguage/>  */}
          <ThemeDropDown />
          <UserInfo />
        </StyledHeaderItemWrapper>
      </StyledHeader>
    </StyledHeaderWrapper>
  );
};
