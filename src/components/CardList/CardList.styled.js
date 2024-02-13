import styled from "styled-components";

export const CardListStyled = styled.ul`
    padding-right: ${p => p.theme.spacing(1)}; 
    margin: ${p=>p.theme.spacing(3.5)} 0 ;
    width: 347px;
    display: flex;
    flex-direction: column;
    gap: ${p=> p.theme.spacing(2)};
    max-height: 478px;
    overflow-y: auto;
    overflow-x: hidden;

    @media only screen and (min-width: 768px) {
      padding-right: ${p => p.theme.spacing(2)}; 
    };

    /* Стилізація скроллбару */
  &::-webkit-scrollbar {
    width: 8px; /* Ширина скроллбару */    
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${p => p.theme.violetColors.lightViolet}; /* Колір скроллбару */
    border-radius: ${p => p.theme.radius.l}; /* Округлення країв скроллбару */
  }
  
  &::-webkit-scrollbar-track {
    background-color: ${p => p.theme.colors.white}; /* Колір фону скроллбару */
    border-radius: ${p => p.theme.radius.l};
  }   
`;
