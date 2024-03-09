import styled from 'styled-components';

export const Text = styled.p`
  margin-top: 212px;
  font-size: 12px;
  line-height: 1.3;
  letter-spacing: -0.02em;
  text-align: center;
  color: ${p => p.theme.currentTheme.homeText};

  @media only screen and (min-width: 375px) and (max-width: 767px) {
    margin-top: 212px;
    max-width: 335px;
  }
  @media only screen and (min-width: 768px) {
    margin-top: 342px;
    max-width: 486px;
    font-size: 14px;
  }
  @media only screen and (min-width: 1440px) {
    margin-top: 237px;
  }
`;
export const ButtonText = styled.button`
  padding: 0;
  font-size: 12px;
  border: none;
  background-color: inherit;
  color: ${p => p.theme.currentTheme.accent};

  @media only screen and (min-width: 768px) {
    font-size: 14px;
  }
`;
