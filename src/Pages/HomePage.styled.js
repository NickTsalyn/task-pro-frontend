import styled from 'styled-components';

export const HomeWrapper = styled.div`
  min-height: 100vh;    
  min-width: 320px;
  margin: 0 auto; 
  display: flex;
  justify-content: center;
  @media only screen and (min-width: 375px) {
     min-width: 375px;
  }

  @media screen and (min-width: 768px) {
    min-width: 768px;
  }

  @media screen and (min-width: 1440px) {
   min-width: 1440px;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;