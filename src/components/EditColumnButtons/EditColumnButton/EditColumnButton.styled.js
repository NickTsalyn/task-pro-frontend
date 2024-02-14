import styled from 'styled-components';

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
export const EditButton = styled.button`
  display:flex;
  align-items: center;
  padding: 0;
  background-color: ${p => p.theme.currentTheme.taskBgn };;
  border: none;
`;
