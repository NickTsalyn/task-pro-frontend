import styled from 'styled-components';

export const ColumnListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  overflow-y: hidden;
  overflow-x: auto;

  &::-webkit-scrollbar {
    width: 12px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${p => p.theme.currentTheme.horizontScroll};
    border-radius: ${p => p.theme.radius.l};
  }

  &::-webkit-scrollbar-track {
    background-color: ${p => p.theme.currentTheme.horizontScrollBgn};
    border-radius: ${p => p.theme.radius.l};
  }
`;

export const ColumnListStyled = styled.ul`
  display: flex;
  flex-direction: row;
  gap: ${p => p.theme.spacing(4.5)};
  margin-right: ${p => p.theme.spacing(4.5)};
`;

export const ColumnButtonwrapper = styled.div`
  width: 334px;
`;
