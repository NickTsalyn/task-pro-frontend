import styled from "styled-components";

export const ColumnListStyled = styled.ul`
    margin: 45px 0 60px 20px;
    display: flex;
    flex-direction: row;
    gap: ${p=> p.theme.spacing(8.5)};

    @media only screen and (min-width: 768px) {
        margin: 26px 0 96px 32px    
    };

    @media only screen and (min-width: 1440px) {
        margin: 10px 0 36px 24px    
    };

    overflow-y: hidden;
    overflow-x: auto;

    &::-webkit-scrollbar {
    width: 12px; /* Ширина скроллбару */    
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${p => p.theme.violetColors.lightViolet}; /* Колір скроллбару */
    border-radius: ${p => p.theme.radius.l}; /* Округлення країв скроллбару */
  }
  
  &::-webkit-scrollbar-track {
    background-color: ${p => p.theme.colors.white}; /* Колір фону скроллбару */
    border-radius: ${p => p.theme.radius.l};; 
  } 
`;

