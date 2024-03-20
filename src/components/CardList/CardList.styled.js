import styled from 'styled-components';

export const CardListStyled = styled.ul`
  margin-bottom: ${p => p.theme.spacing(3.5)};
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(2)};
  max-height: 478px;
  overflow-y: auto;
  overflow-x: hidden;

  @media only screen and (min-width: 768px) {
    max-height: 640px;
  }

  @media only screen and (min-width: 1440px) {
    max-height: 478px;
  }

  @media only screen and (min-width: 1920px) {
    margin-bottom: ${p => p.theme.spacing(2)};
    max-height: 964px;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${p => p.theme.currentTheme.verticalScroll};
    border-radius: ${p => p.theme.radius.l};
  }

  &::-webkit-scrollbar-track {
    background-color: ${p => p.theme.currentTheme.verticalScrollBgn};
    border-radius: ${p => p.theme.radius.l};
  }
`;
