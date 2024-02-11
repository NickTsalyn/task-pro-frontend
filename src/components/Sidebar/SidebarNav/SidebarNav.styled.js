import styled from 'styled-components';

export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledText = styled.p`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
  padding-bottom: ${p => p.theme.spacing(2)};
  letter-spacing: -0.02em;
`;

export const StyledCreateWrapper = styled.div`
  padding: ${p => p.theme.spacing(3.5)} 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: ${p => p.theme.spacing(10)};
`;
export const StyledLogoutBtn = styled.button`
  border: none;
  background-color: transparent;
  width: 100%;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;

  color: rgb(255, 255, 255);
  padding: 0;
  display: flex;
  gap: ${p => p.theme.spacing(3.5)};
  align-items: center;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const StyledSVGLogout = styled.svg`
  fill: transparent;
  stroke: white;

  width: 32px;
  height: 32px;
  &:hover,
  &:focus {
    stroke: ${p => p.theme.colors.darkTextColor};
    opacity: 0.5;
  }
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 20px;
`;
