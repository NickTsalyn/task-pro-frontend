import styled from "styled-components";

 export const HelpContainer = styled.div` 
 box-sizing: border-box; 
 display:flex;
 flex-wrap: wrap;
 width: 197px;
  border: 1px solid #9092D6;
  padding: 14px;
  background-color: ${p => p.theme.currentTheme.helpBlockColor};
  border-radius: 8px;
  
  @media (min-width: 768px) {
    width: 212px;  
    padding: 20px;
  }
  `;
  
export const HelpImage = styled.img`
  max-width: 54px;
  height: 78px;
  margin-bottom:14px;
 margin-right:100px

`;

export const HelpText = styled.p`
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.02em;
  text-align: left;
  color:${p => p.theme.currentTheme.iconNeedHelp};
  margin-bottom:18px;
  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 20px;
  };
`;

export const HelpButton = styled.button`
  width: 20px;
  height: 20px;
  display:flex;
  border-radius: 50%;
  border:none;
  color:  ${p => p.theme.currentTheme.iconNeedHelp};
  cursor: pointer;
  margin-right: 11px;
  padding:0;
  position: relative; 
  background: transparent;
`;
  
  
  export const ButtonText= styled.div`
  display:flex;  
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.02em;
  text-align: left;
  cursor: pointer;
  color: ${p => p.theme.currentTheme.iconNeedHelp};
`;
  
  export const IconContainer = styled.div`
  font-size: 1.7em;
  
  position: absolute;
  top: 0%;
  left: 0%;
  transform: translate(-10%, -10%); 
`;

 export const TaskPro = styled.span`
  color: ${p => p.theme.currentTheme.accent};
  font-size: 12px;
  line-height: 20px;
  letter-spacing: -0.02em;
  text-align: left;
  
  @media (min-width: 768px) {
    font-size: 14px;
  };

`;

