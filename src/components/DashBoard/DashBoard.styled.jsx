import styled from 'styled-components';

export const DashBoardWrapper = styled.div`
  padding: 46px 20px 24px;
  max-width: 310px;
  margin: 0 auto;

  @media only screen and (min-width: 375px) {
    max-width: 375px;
  }

  @media only screen and (min-width: 768px) {
    padding: 26px 32px 32px;
    max-width: 768px;
  }

  @media only screen and (min-width: 1440px) {
    padding: 10px 24px 8px;
    max-width: 1132px;
  }
`;
