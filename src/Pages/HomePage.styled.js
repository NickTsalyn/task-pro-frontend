import styled from 'styled-components';

export const HomeWrapper = styled.div`
  height: 100vh;
  width: 320px;
  margin: 0 auto;
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