import styled from 'styled-components';

export const ColumnWrapper = styled.li`
  display: flex;
  flex-direction: column;
  width: 347px;

  @media only screen and (min-width: 768px) {
    width: 350px;
  }
`;

export const ColumnHeader = styled.div`
  margin-bottom: ${p => p.theme.spacing(3.5)};
  width: 334px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${p => p.theme.spacing(4.5)} 0;
  border-radius: ${p => p.theme.radius.m};
  background-color: ${p => p.theme.currentTheme.taskBgn};

  @media only screen and (min-width: 1920px) {
    margin-bottom: ${p => p.theme.spacing(2)};
  }
`;

export const ColumnTitle = styled.p`
  margin-left: ${p => p.theme.spacing(5)};
  font-weight: 500;
  letter-spacing: -0.02em;
  line-height: 1.43;
  color: ${p => p.theme.currentTheme.mainText};
`;

export const EditBlock = styled.div`
  margin-right: ${p => p.theme.spacing(5)};
  display: flex;
  flex-direction: row;
  gap: ${p => p.theme.spacing(2)};
`;

export const EditButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0;
  background-color: ${p => p.theme.currentTheme.taskBgn};
  border: none;
`;

export const EditSVG = styled.svg`
  stroke: ${p => p.theme.currentTheme.iconStroke};
  fill: ${p => p.theme.currentTheme.taskBgn};
  width: 16px;
  height: 16px;
  &:hover,
  &:focus {
    stroke: ${p => p.theme.currentTheme.accent};
  }
`;
