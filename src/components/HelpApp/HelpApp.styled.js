import styled from "styled-components";

 export const HelpContainer = styled.div` 
 box-sizing: border-box; 
 display:flex;
 flex-wrap: wrap;
 width: 197px;
  border: 1px solid #9092D6;
  padding: 14px;
  /* position: relative; */
  background: #9092D6;
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
  color:#FFFFFF;
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
  color: #FFFFFF;
  cursor: pointer;
  margin-right: 11px;
  padding:0;
  position: relative; 
  background: #9092D6;
  `;
  // border: 1.8px solid #161616;
  
  export const ButtonText= styled.div`
  display:flex;  
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.02em;
  text-align: left;
  cursor: pointer;
  color: #FFFFFF;
  `;
  
  export const IconContainer = styled.div`
  font-size: 1.7em;
  
  position: absolute;
  top: 0%;
  left: 0%;
  transform: translate(-10%, -10%); 
  `;

 export const TaskPro = styled.span`
  color: #5255BC; 
  font-size: 12px;
  line-height: 20px;
  letter-spacing: -0.02em;
  text-align: left;
  @media (min-width: 768px) {
    font-size: 14px;
  };

`;

