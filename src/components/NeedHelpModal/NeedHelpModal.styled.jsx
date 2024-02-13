import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
   width:100%;
  max-width: 335px; 
  min-width:320px;
  height: 355px;
  background: #FCFCFC;
  border-radius: 8px;
  border: none;
  padding: 24px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  
  @media (min-width: 768px) {
    width:400px;   
  
  }
  @media (min-width: 335px) {
    width:335px;   
  
  }
`;
 

export const ModalTitle = styled.h2`
font-family: Poppins;
font-size: 18px;
font-weight: 500;
line-height: 27px;
letter-spacing: -0.02em;
text-align: left;
margin-bottom:24px;
`;

export const CloseButton = styled.button`
  position: absolute;
  width:18px;
  height:18px;
  top: 14px;
  right: 14px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding:0;
`;

export const InputWrapper = styled.div`

`;

export const Input = styled.input`


width: 100%;
height: 49px;
 padding: 14px, 14px, 14px, 18px;
padding-left:18px;
padding-right:14px;
padding-top:14px;
padding-bottom:14px;
border: 1px solid #5255BC;
border-radius: 8px;
box-sizing: border-box;
opacity: 0.4px;
margin-bottom: 14px;


font-family: Poppins;
font-size: 14px;
font-weight: 400;
line-height: 21px;
letter-spacing: -0.02em;
text-align: left;

`;

export const CommentInput = styled.textarea`
  width: 100%;
  height: 120px;
  padding: 14px;
  padding-left:18px;
  
  border: 1px solid #5255BC;
  border-radius: 8px;
  box-sizing: border-box;
  resize: none;

  font-family: Poppins;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  text-align: left;
margin-bottom:24px;
`;

export const SendButton = styled.button`
  width: 100%;  
  color: #FFFFFF;
  padding: 14px, 126px, 14px, 126px;
  padding-top:14px;
  padding-bottom:14px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background: rgba(82, 85, 188, 1);

  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.02em;
  text-align: center;
`;
export const StyledSvgClose = styled.svg`
  fill: ${props => props.theme.colors.darkTextColor};
  stroke: ${props => props.theme.colors.darkTextColor};
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  border: none;
  transition: background-color 0.3s ease;
  @media (min-width: 768px) {
    width: 18px;
    height: 18px;  
  
  }
  `;