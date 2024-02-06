import styled from 'styled-components';
import sprite from '../../../images/icons.svg';
import { StyledLogoIcon, StyledLogoText, StyledLogoWrapper } from './Logo.styled';


const StyledSVG = styled.svg`
fill:  ${p => p.theme.violetColors.accentColor};
  /* stroke: yellow; */
  /* background-color:white; */
  /* width: 12px;
  height: 16px; */

`;

export const Logo = () => {
    return (
        <StyledLogoWrapper>
         <StyledLogoIcon>
            <StyledSVG>
        <use xlinkHref={`${sprite}#icon-logo2`}></use>
      </StyledSVG>
      </StyledLogoIcon>
     
            <StyledLogoText>Task Pro</StyledLogoText>
        </StyledLogoWrapper>
    );
}