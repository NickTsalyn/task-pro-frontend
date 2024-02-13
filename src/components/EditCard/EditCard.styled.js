import { Field, Form } from "formik";

import { styled } from "styled-components";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const getColor = (props) => {
  switch (props.value) {
    case 'blue':
      return props.theme.priorityColors.low;
    case 'pink':
      return props.theme.priorityColors.medium;
    case 'green':
      return props.theme.priorityColors.high;
    default:
      return props.theme.priorityColors.without;
  }
};

export const EditCardWrapper = styled(Form)`
padding: 24px;
display:flex;
flex-direction: column;

width: 287px;
background-color: ${p => p.theme.colors.white};

`
export const EditCardContainer = styled.div`

display:flex;
flex-direction: column;
gap:24px;


`
export const EditCardHeader = styled.h3`
font-weight: 500;
font-size: 18px;
letter-spacing: -0.02em;
color: ${p=> p.theme.colors.darkTextColor};
width: 100%;
`

export const EditCardTextCont = styled.div`
display: flex;
flex-direction: column;
gap:14px;
`
export const EditCardTitle = styled(Field)`
 width: 100%;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  padding: 14px 18px;
  border-radius: ${p => p.theme.radius.m};
  border: 1px solid ${p => p.theme.violetColors.accentColor};
  background: ${p => p.theme.violetColors.bgColor};
  color: ${p => p.theme.colors.darkTextColor};
  opacity: 0.4;
  outline: none;
  box-shadow: 0px 4px 16px 0px ${p => p.theme.colors.shadowColor};
  box-sizing: border-box;
  &::placeholder {
    font-size: 14px;
    color: ${p => p.theme.colors.darkTextColor};
    letter-spacing: -0.02em;
  }
  &:focus {
    opacity: 1;
  }
`
export const EditCardDescription = styled(Field)`
 width: 100%;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  padding: 14px 18px;
  border-radius: ${p => p.theme.radius.m};
  border: 1px solid ${p => p.theme.violetColors.accentColor};
  background: ${p => p.theme.violetColors.bgColor};
  color: ${p => p.theme.colors.darkTextColor};
  opacity: 0.4;
  outline: none;
  box-shadow: 0px 4px 16px 0px ${p => p.theme.colors.shadowColor};
  box-sizing: border-box;
  resize:none;
  &::placeholder {
    font-size: 14px;
    color: ${p => p.theme.colors.darkTextColor};
  }
  &:focus {
    opacity: 1;
  }
`
export const EditCardColorCont = styled.div`
display: flex;
flex-direction:column;
gap:4px;

`
export const EditCardLabelText = styled.p`
padding: 0;
margin: 0;
font-size: 12px;
letter-spacing: -0.02em;
color: ${p => p.theme.colors.greyIconColor}
`
export const EditCardLabelColor = styled(Field)`

position: relative;
width: 14px;
height: 14px;
&::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  background-color:  ${getColor};
}
/* input[type="radio"]:checked + &::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  background-color:  ${getColor};

   opacity:0; 
} */
`
export const EditCardContMark = styled.div`

display: flex;
gap:8px;
`


export const EditCardBtn = styled.button`
display: flex;
align-items: center;
justify-content: center;
gap:8px;
width: 100%;
padding-top: 10px;
padding-bottom: 10px;
background-color: ${p => p.theme.violetColors.accentColor};
border-radius:8px;
border-color:transparent;
font-size: 14px;
font-weight: 500;
line-height: 21px;
letter-spacing: -2%;
`

export const EditCardDate = styled(DatePicker)`
padding: 0;
background-color: ${p => p.theme.violetColors.bgColor};
 border:none;
 color: ${p => p.theme.violetColors.accentColor};
 outline: none;
 font-weight: 500;
font-size: 14px;
letter-spacing: -0.02em;
`

export const EditCardContCal = styled.div`
display: flex;
flex-direction: column;
gap:4px;
`
export const EditCardOptionCont = styled.div`
display: flex;
flex-direction: column;
gap:14px;
margin-bottom: 40px;
`
export const EditCardTextCal = styled.p`
padding:0;
margin: 0;
font-size: 12px;
letter-spacing: -0.02em;
color:${p => p.theme.colors.greyIconColor}

`

export const EditCardSvgContainer = styled.span`
display: flex;
align-items: 'center';
justify-content: center;
border-radius: 4px; 

width: 28px;
height: 28px;
background-color:${p => p.theme.colors.white};
`

export const EditCardButtonSvg = styled.svg`

fill: ${p => p.theme.colors.darkTextColor};
  stroke: ${p => p.theme.colors.darkTextColor};
 
  width: 14px;
  height: 14px;
  margin:auto;
 

`
export const EditCardSvgButtonText = styled.p`
font-weight: 500;
font-size: 14px;
letter-spacing: -0.02em;
color: ${p => p.theme.colors.white};
padding: 0;
margin: 0;

`