import sprite from '../../../images/icons.svg';
import {
  StyledLogoIcon,
  StyledLogoText,
  StyledLogoWrapper,
  StyledSVGLogo,
} from './Logo.styled';

export const Logo = () => {
  return (
    <StyledLogoWrapper>
      <StyledLogoIcon>
        <StyledSVGLogo>
          <use xlinkHref={`${sprite}#icon-logo2`}></use>
        </StyledSVGLogo>
      </StyledLogoIcon>

      <StyledLogoText>Task Pro</StyledLogoText>
    </StyledLogoWrapper>
  );
};
