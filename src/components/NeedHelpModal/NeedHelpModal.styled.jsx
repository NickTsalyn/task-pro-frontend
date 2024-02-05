import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 335px;
  height: 355px;
  background: #FCFCFC;

  border: 1px solid #ccc;
  padding: 24px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
`;

export const ModalTitle = styled.h2`
font-size: 18px;
font-weight: 500;
line-height: 27px;
letter-spacing: -0.02em;
text-align: left;
margin-bottom:24px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const InputWrapper = styled.div`
  margin-bottom: 14px;
  width: 287px;
`;

export const Input = styled.input`
width: 100%;
height: 49px;
padding: 14px, 174px, 14px, 18px;
padding-left:14px;
border: 1px solid #5255BC;
border-radius: 8px;
box-sizing: border-box;
opacity: 0.4px;


font-size: 14px;
font-weight: 400;
line-height: 21px;
letter-spacing: -0.02em;
text-align: left;

`;

export const CommentInput = styled.textarea`
  width: 100%;
  height: 120px;
  padding: 8px;
  padding-left:14px;
  border: 1px solid #5255BC;
  border-radius: 8px;
  box-sizing: border-box;
  resize: none;

  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  text-align: left;

`;

export const SendButton = styled.button`
margin-top: 10px;
  width: 100%;  
  color: #FFFFFF;
  padding: 14px, 126px, 14px, 126px;
  padding-top:14px;
  padding-bottom:14px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background: rgba(82, 85, 188, 1);

  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.02em;
  text-align: center;

`;