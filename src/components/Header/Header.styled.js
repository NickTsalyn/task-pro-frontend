import styled from 'styled-components';

export const StyledHeader = styled.header`
  /* min-width: 320px; */
  max-width: 335px;
  height: 60px;
  display: flex;
  padding: 0 20px 0 0;
  /* padding: ${p => p.theme.spacing(3.5)} ${p => p.theme.spacing(5)}; */

  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 704px;

    padding: 0 32px 0 0;
    /* padding: ${p => p.theme.spacing(4.5)} ${p => p.theme.spacing(8)}; */

  }

  @media screen and (min-width: 1440px) {
    max-width: 1132px;

    height: 68px;
    padding: 0 24px 0 0;
    /* padding: ${p => p.theme.spacing(4.5)} ${p => p.theme.spacing(6)}; */
    /* margin: 0 0 0 auto; */
    margin: 0;
  }
`;

export const StyledHeaderWrapper = styled.div`
display: flex;
justify-content: space-between;
`

