import { Field, Form } from "formik";

  import { styled } from "styled-components";
  // import DatePicker from 'react-datepicker';
  // import 'react-datepicker/dist/react-datepicker.css';

  const getColor = (props) => {
    switch (props.value) {
      case 'Low':
        return props.theme.priorityColors.low;
      case 'Medium':
        return props.theme.priorityColors.medium;
      case 'High':
        return props.theme.priorityColors.high;
      default:
        return props.theme.priorityColors.without;
    }
  };

  export const AddCardWrapper = styled(Form)`
  padding: 24px;
  display:flex;
  flex-direction: column;

  width: 287px;
  background-color: ${p => p.theme.currentTheme.taskBgn};

  `
  export const AddCardContainer = styled.div`

  display:flex;
  flex-direction: column;
  gap:24px;


  `
  export const AddCardHeader = styled.h3`
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: ${p=> p.theme.currentTheme.mainText};
  width: 100%;

  `

  export const AddCardTextCont = styled.div`
  display: flex;
  flex-direction: column;
  gap:14px;


  `
  export const AddCardTitle = styled(Field)`
    width: 100%;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.02em;
    padding: 14px 18px;
    border-radius: ${p => p.theme.radius.m};
    border: 1px solid ${p => p.theme.currentTheme.accent};
    background: ${p => p.theme.currentTheme.inputBgn};
    color: ${p => p.theme.currentTheme.mainText};
    opacity: 0.4;
    outline: none;
    box-shadow: 0px 4px 16px 0px ${p => p.theme.colors.shadowColor};
    box-sizing: border-box;
    &::placeholder {
      font-size: 14px;
      color: ${p => p.theme.currentTheme.mainText};
      letter-spacing: -0.02em;
    }
    &:focus {
      opacity: 1;
    }
  `
  export const AddCardDescription = styled.textarea`
  width: 100%;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.02em;
    padding: 14px 18px;
    border-radius: ${p => p.theme.radius.m};
    border: 1px solid ${p => p.theme.currentTheme.accent};
    background: ${p => p.theme.currentTheme.inputBgn};
    color: ${p => p.theme.currentTheme.mainText};
    opacity: 0.4;
    outline: none;
    box-shadow: 0px 4px 16px 0px ${p => p.theme.colors.shadowColor};
    box-sizing: border-box;
    resize:none;
    &::placeholder {
      font-size: 14px;
      color: ${p => p.theme.currentTheme.mainText};
    }
    &:focus {
      opacity: 1;
    }

  `
  export const AddCardDesc = styled(Field)`
  /* width: 100%; */
    /* font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.02em;
    padding: 14px 18px;
    border-radius: ${p => p.theme.radius.m};
    border: 1px solid ${p => p.theme.violetColors.accentColor};
    background: ${p => p.theme.violetColors.bgColor};
    color: ${p => p.theme.colors.darkTextColor}; */


  `

  export const AddCardColorCont = styled.div`
  display: flex;
  flex-direction:column;
  gap:4px;

  `
  export const AddCardLabelText = styled.p`
  padding: 0;
  margin: 0;
  font-size: 12px;
  letter-spacing: -0.02em;
  color: ${p => p.theme.currentTheme.grayText};


  `
  export const AddCardInputColor = styled(Field)`
    position: absolute;
    opacity: 0;
    left:90%;
    
    + .radio-label {
      &:before {
        content: '';
        background-color: ${(props) => getColor(props)
        };
        border-radius: 100%;
        border: 1px solid
          ${(props) => getColor(props)};
        display: inline-block;
        width: 14px;
        height: 14px;
        position: relative;
       
        cursor: pointer;
        text-align: center;
        transition: all 250ms ease;
      }
    }
    &:checked {
      + .radio-label {
        &:before {
          background-color: ${(props) => getColor(props)};
          box-shadow: inset 0 0 0 4px white;
        }}}
  `
 
 export const AddCardLabelColor = styled.label`
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
    cursor: pointer;
    transform: translate(-50%, -50%);
    background-color: ${(props) => getColor(props)};
    transition: all 250ms ease;
    border: 1px solid ${(props) => getColor(props)};
  }

  &:checked + &::before {
    background-color: ${(props) => getColor(props)};
    box-shadow: inset 0 0 0 4px white;
   
  }
`;
  export const AddCardContMark = styled.div`
  display: flex;
  gap:8px;
  `
  export const AddCardBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap:8px;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: ${p => p.theme.currentTheme.accent};
  border-radius:8px;
  border-color:transparent;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -2%;
  `
  export const AddCardContCal = styled.div`
  display: flex;
  flex-direction: column;
  gap:4px;
  `
  export const AddCardOptionCont = styled.div`
  display: flex;
  flex-direction: column;
  gap:14px;
  margin-bottom: 40px;
  `
  export const AddCardTextCal = styled.p`
  padding:0;
  margin: 0;
  font-size: 12px;
  letter-spacing: -0.02em;
  color:${p => p.theme.currentTheme.grayText};
  `
  export const AddCardSvgContainer = styled.span`
  display: flex;
  align-items: 'center';
  justify-content: center;
  border-radius: 4px; 

  width: 28px;
  height: 28px;
  background-color:${p => p.theme.currentTheme.plusIconFill};




  `


  export const AddCardButtonSvg = styled.svg`

    fill: ${p => p.theme.currentTheme.plusIconFill};
    stroke: ${p => p.theme.currentTheme.plusIconStroke};
  
    width: 14px;
    height: 14px;
    margin:auto;
    `
  export const AddCardSvgButtonText = styled.p`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${p => p.theme.currentTheme.plusIconFill};
  padding: 0;
  margin: 0;
  `
  export const AddAnotherCard = styled.button`
  margin-bottom:24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap:8px;
  width: 334px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: ${p => p.theme.currentTheme.accent};
  border-radius:8px;
  border-color:transparent;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -2%;

  @media only screen and (min-width: 768px) {
    margin-bottom: 52px;
  }
  @media only screen and (min-width: 1440px) {
    margin-bottom: 16px;
  }
  `

  export const AddCardSvgClose = styled.svg`
  fill: ${p => p.theme.currentTheme.mainText};
    stroke: ${p => p.theme.currentTheme.mainText};
    width: 18px;
    height: 18px;
  `
export const CalendarContainer = styled.div`
display: flex;
gap: 4px;
position: relative;



`;

export const DayText = styled.p`
font-weight: 500;
letter-spacing: -0.02em;
color: #5255bc;
`;

export const BtnOpenCal = styled.button`
display: flex;
align-items: flex-start;
gap: 4px;
position: relative;
width: 100%;
height: 18px;
cursor: pointer;
background:transparent;
border: none;

svg {
  width: 18px;
  height: 18px;
  fill: #fff;
  stroke-width: 2px;
  stroke: #5255bc;
}
`;

 export const CustomCalendarContainer = styled.div`
 .custom-calendar-container {
  position: absolute;
  z-index: 1000;
  top: auto; 
  bottom: 80px;
  left: 0;
  display: none;
}

.custom-calendar-container--open {
  display: block;
}
 `