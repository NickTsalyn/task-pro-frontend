import styled from "styled-components";

export const ColumnWrapper = styled.div`
  display:flex;
  flex-direction: column;  
`;
export const ColumnHeader = styled.div`
  width: 335px;
  display: flex;
  flex-direction:row;
  justify-content: space-between;
  align-items: center;
  padding: ${p=>p.theme.spacing(4.5)} 0;
  border-radius: ${p => p.theme.radius.m};  
  background-color:  ${p => p.theme.colors.white}
`;
export const ColumnTitle = styled.h3`
  margin-left: ${p => p.theme.spacing(5)}; 
  font-size: 14px;
  letter-spacing: -0.28px;
`;
export const EditBlock = styled.div`
  margin-right :${p => p.theme.spacing(5)} ;
  display: flex;
  flex-direction: row;
  gap: ${p=>p.theme.spacing(2)} ;  
`;
export const EditButton = styled.button`
  display:flex;
  align-items: center;
  padding: 0;
  background-color: transparent;
  border: none;
`;
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

