import styled from "styled-components";

export const ColumnListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  margin-top: 46px;
  /* width: 100%; */
  width: 335px;

  @media only screen and (min-width: 768px) {
      margin-top: 26px; 
      /* max-width: 768px;    */
      width: 704px;
    };
    @media only screen and (min-width: 1440px) {
        margin-top: 10px;
        /* max-width: 1440px;     */
        width: 1132px;
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

export const ColumnListStyled = styled.ul`
    margin: 0 4px 60px 20px;
    display: flex;
    flex-direction: row;
    gap: ${p=> p.theme.spacing(4.5)};
 
`;
