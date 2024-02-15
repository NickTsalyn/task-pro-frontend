import styled from 'styled-components';

export const CardListStyled = styled.ul`
  padding-right: ${p => p.theme.spacing(1)};
  margin: ${p => p.theme.spacing(3.5)} 0;
  width: 347px;
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(2)};
  max-height: 154px;
  overflow-y: auto;
  overflow-x: hidden;

  @media only screen and (min-width: 768px) {
    padding-right: ${p => p.theme.spacing(2)};
    max-height: 640px;
  }

  @media only screen and (min-width: 1440px) {
    max-height: 478px;
  }

  &::-webkit-scrollbar {
    width: 8px; /* Ширина скроллбару */
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${p => p.theme.currentTheme.verticalScroll}; /* Колір скроллбару */
    border-radius: ${p => p.theme.radius.l}; /* Округлення країв скроллбару */
  }

  &::-webkit-scrollbar-track {
    background-color: ${p => p.theme.currentTheme.verticalScrollBgn}; /* Колір фону скроллбару */
    border-radius: ${p => p.theme.radius.l};
  }
`;
