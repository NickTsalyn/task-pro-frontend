import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: ${p => p.theme.currentTheme.headerBgn};
  display: flex;
  justify-content: space-between;

  padding: ${p => p.theme.spacing(3.5)} ${p => p.theme.spacing(5)};
  @media screen and (min-width: 768px) {
    padding: ${p => p.theme.spacing(4.5)} ${p => p.theme.spacing(8)};
  }

  @media screen and (min-width: 1440px) {
    margin: 0;
    padding: 18px 24px;
  }
`;

export const StyledHeaderItemWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;
