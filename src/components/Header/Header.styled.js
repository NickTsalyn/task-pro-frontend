import styled from 'styled-components';

export const StyledHeader = styled.header`
  /* width: 320px; */
  /* height: 60px; */
  display: flex;
  justify-content: space-between;
  /* padding: 14px 20px; */
  padding: 14px ${p => p.theme.spacing(5)};
  /* margin: 0 auto; */
  /* margin-left: auto; */

  @media screen and (min-width: 768px) {
    /* width: 704px; */
    /* padding: 0 ${p => p.theme.spacing(8)}; */
  }

  @media screen and (min-width: 1440px) {
    /* width: 1180px; */
    /* height: 68px; */
    /* margin: 0;
    padding: 0; */
  }
`;

export const StyledHeaderItemWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  /* margin-left: auto; */
  /* padding: 14px 20px; */

`;
