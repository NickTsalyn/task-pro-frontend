import styled from 'styled-components';

export const HomeWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media only screen and (min-width: 1440px) {
    width: calc(100% - 260px);
  }
`;
