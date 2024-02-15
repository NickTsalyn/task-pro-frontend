  import { Field, Form } from "formik";

  import { styled } from "styled-components";
  import DatePicker from 'react-datepicker';
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
  export const DatePickerCalendar = styled(DatePicker)`
    .react-date-picker__calendar {
      width: 233px; 
      height: auto;
      padding: 18px;
      background-color: ${p => p.theme.currentTheme.headerBgn};
      border: 1px solid ${p => p.theme.currentTheme.accent}; //#5255bc;
      border-radius: ${p => p.theme.radius.m};
      box-shadow: 0 4px 8px ${p => p.theme.currentTheme.grayText}; //rgba(0, 0, 0, 0.1)
      position: absolute;
      z-index: 1000;
      top: 40px; 
      left: 0;
      display: none;
    }

    .react-date-picker__calendar--open {
      display: block;
    }

    .react-calendar {
      width: 100%;
    }

    .react-calendar__navigation {
      display: flex;
      justify-content: space-between;
      padding-bottom: ${p => p.theme.spacing(3.5)};
      margin-bottom: ${p => p.theme.spacing(3.5)};
      border-color: transparent;
      border-bottom: 1px solid ${p => p.theme.currentTheme.horizontScroll}; //#16161633;
    }

    .react-calendar__navigation__label{
      background: transparent;
      border-color: transparent;
    }

    .react-calendar__navigation__prev-button, 
    .react-calendar__navigation__arrow, 
    .react-calendar__navigation__next-button {
      width: 6px;
      height: 10px;
      color: ${p => p.theme.currentTheme.mainText}; //#161616
      background: transparent;
      border: none;
      transition: 200ms ease-out;

      &:hover {
      color: ${p => p.theme.currentTheme.accent}; //#5255BC
      }
    }

    .react-calendar__navigation__label__labelText, 
    .react-calendar__navigation__label__labelText--from {
    
      font-size: 16px;
      font-weight: 500;
      letter-spacing: -0.02em;
      color: ${p => p.theme.currentTheme.mainText}; //#161616
      margin-bottom: ${p => p.theme.spacing(3.5)};
    }

    .react-calendar__month-view__weekdays {
      display: flex;
      justify-content: space-between;
      margin-bottom: ${p => p.theme.spacing(2)};
    }

    .react-calendar__month-view__weekdays__weekday {
      flex: 1;
      text-align: center;
      font-weight: 500;
      letter-spacing: -0.02em;
      color: ${p => p.theme.currentTheme.grayText}; //#16161680 || #rgba(225, 225, 225, 0.5);

      abbr{
        text-decoration: none;
      }
    }

    .react-calendar__decade-view__years__year,  
    .react-calendar__year-view__months__month,
    .react-calendar__month-view__days__day {
      background: transparent;
      border-color: transparent;
      border-radius: 50%;
    }

    .react-calendar__month-view__days__day--neighboringMonth {
      flex: 0 0 14.2857%;  
      overflow: hidden; 
      margin-inline-end: 0px;
      color: ${p => p.theme.currentTheme.mainText}; //#161616
      opacity: 20%;
      font-size: 14px;
      line-height: 1.3;
  }

    .react-calendar__tile {
      flex: 1 0 14.2857%;
      padding: ${p => p.theme.spacing(2)};
      text-align: center;
      cursor: pointer;
      transition: 200ms ease-out;

      &:hover {
        background-color: ${p => p.theme.currentTheme.accent}; //#5255BC
        border-radius: 50%;
        border-color: transparent;
      }

      &--active,
      &--range,
      &--rangeStart,
      &--rangeEnd,
      &--rangeBothEnds {
        background-color: ${p => p.theme.currentTheme.accent}; //#5255BC
        color: ${p => p.theme.colors.white}; //#fff
        border-radius: 50%;
        border-color: transparent;
      }

      &--neighboringMonth {
        opacity: 0.4;
      }
    }
  `;