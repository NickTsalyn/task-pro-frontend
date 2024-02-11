import styled from 'styled-components';

export const StyledHeader = styled.header`
  /* min-width: 320px; */
  min-width: 320px;
  /* height: 60px; */
  display: flex;
  justify-content: space-between;
  padding: 14px 20px;
  background-color: ${p => p.theme.colors.white};
  /* padding: ${p => p.theme.spacing(3.5)} ${p => p.theme.spacing(5)}; */
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 100%;
    padding: 18px 32px;
    /* padding: ${p => p.theme.spacing(4.5)} ${p => p.theme.spacing(8)}; */
  }

  @media screen and (min-width: 1440px) {
    width: 100%;
    padding: 18px 24px;
    /* padding: ${p => p.theme.spacing(4.5)} ${p => p.theme.spacing(6)}; */
    /* margin: 0 0 0 auto; */
    margin: 0;
  }
`;

export const StyledHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const StyledHeaderItemWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;
