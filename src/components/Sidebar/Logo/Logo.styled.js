import styled from 'styled-components';

export const StyledLogoWrapper = styled.div`
  padding-bottom: 70px;
  display: flex;
  gap: ${p => p.theme.spacing(2)};

  @media screen and (min-width: 1440px) {
    padding-bottom: 60px;
  }
`;

export const StyledLogoIcon = styled.span`
  display: flex;
  border-radius: ${p => p.theme.radius.m};
  width: 32px;
  height: 32px;
  background-color: #ecedfd;
`;
export const StyledLogoText = styled.p`
  display: flex;
  margin: auto 0;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
  color: #ffffff;
`;

export const StyledSVGLogo = styled.svg`
  fill: ${p => p.theme.violetColors.accentColor};
`;
