import styled from 'styled-components';

export const EditSVG = styled.svg`
  stroke: ${p => p.theme.colors.greyIconColor};
  fill: ${p => p.theme.colors.white};
  width: 16px;
  height: 16px;
  &:hover,
  &:focus {
    stroke: ${p => p.theme.violetColors.accentColor};
  }
`;
export const EditButton = styled.button`
  display:flex;
  align-items: center;
  padding: 0;
  background-color: transparent;
  border: none;
`;
