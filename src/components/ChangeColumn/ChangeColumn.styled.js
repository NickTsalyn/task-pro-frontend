import styled from 'styled-components';

// Change button styles
export const ChangeButtonCard = styled.button`
  background: transparent;
  border: transparent;
  border-radius: 50%;
  height: 16px;
  width: 16px;
`;

export const StyledSVGChangeColumn = styled.svg`
  height: 16px;
  width: 16px;
  fill: ${p => p.theme.colors.white};
  stroke: ${p => p.theme.colors.darkTextColor};
  opacity: 50%;
  transition: 200ms ease-out;

  :hover,
  :focus {
    stroke: ${p => p.theme.violetColors.accentColor};
  }
`;

// Change modal styles
export const ChangeWrapper = styled.div`
  width: 135px;
  padding: 18px;
  background: #fcfcfc;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-shadow: 0 4px 16px 0 rgba(17, 17, 17, 0.1);
`;
export const ChangeButton = styled.button`
  border: none;
  background-color: transparent;
  width: 100%;
  text-align: start;
  color: rgb(22, 22, 22);
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover,
  &:focus {
    color: #5255bc;
    svg {
      stroke: #5255bc;
    }
  }
`;

export const StyledSVGChange = styled.svg`
  stroke: rgb(22, 22, 22);
  fill: none;
  width: 16px;
  height: 16px;
`;
