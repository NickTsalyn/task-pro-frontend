import styled from 'styled-components';

export const HomeWrapper = styled.div`
  min-height: 100vh;
  /* min-width : 310px; */
  max-width: 375px;
  margin: 0 auto;
  /* margin: 0; */
  display: flex;
  justify-content: center;

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;