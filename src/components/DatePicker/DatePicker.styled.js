import styled from "styled-components";
import DatePicker from "react-date-picker";


// import ReactDatePicker from "react-datepicker";
// import { ReactDatePickerProps } from "react-datepicker";

export const DatePickerCalendar = styled(DatePicker)`
.react-datepicker-wrapper {
    display: inline-block;
  }

  .react-datepicker {
    position: relative;
    /* visibility: hidden; */
    opacity: 0;
    pointer-events: none;
  }

  .react-datepicker__triangle {
    display: none;
  }

  .react-datepicker-popper {
    z-index: 1;
  }

.react-date-picker__calendar {
  width: 233px; 
  /* height: auto; */
  height: auto !important;
  padding: 18px;
  background-color: ${p => p.theme.currentTheme.headerBgn};
  border: 1px solid ${p => p.theme.currentTheme.accent}; //#5255bc;
  border-radius: ${p => p.theme.radius.m};
  box-shadow: 0 4px 8px ${p => p.theme.colors.grayText}; //rgba(0, 0, 0, 0.1)
  /* position: absolute; */
  position: fixed;
  z-index: 1000;
  top: auto; 
  bottom: 100px;
  left: 100;
  /* right: -100px; */
  /* display: none; */
}
.react-date-picker__clear-button {
    display: none;
}

.react-date-picker__calendar-button, .react-date-picker__button {
    /* background-color:transparent; */
    background-color: red;
    border-color: transparent;
    width: 100%;
height: 18px;
cursor: pointer;
background:transparent;
border: none;

/* svg {
  width: 18px;
  height: 18px;
  fill: #fff;
  stroke-width: 2px;
  stroke: #5255bc;
}
    */
}

.react-date-picker__calendar-button__icon, 
.react-date-picker__button__icon {
    /* display:none; */
    width: 18px;
  height: 18px;
  fill: #fff;
  stroke-width: 2px;
  stroke: #5255bc;
}
/* .react-date-picker__button {
    background-color:transparent;
} */
.react-date-picker__calendar--open {
  display: block;
}
.react-date-picker__inputGroup{
    display: none;
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
  border-bottom: 1px solid ${p => p.theme.colors.horizontScroll}; //#16161633;
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
  color: ${p => p.theme.colors.mainText}; //#161616
  background: transparent;
  border: none;
  transition: 200ms ease-out;

  &:hover {
  color: ${p => p.theme.colors.accent}; //#5255BC
  }
}

.react-calendar__navigation__label__labelText, 
.react-calendar__navigation__label__labelText--from {

  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.mainText}; //#161616
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
  color: ${p => p.theme.colors.grayText}; //#16161680 || #rgba(225, 225, 225, 0.5);

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
  color: ${p => p.theme.colors.mainText}; //#161616
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
    background-color: ${p => p.theme.colors.accent}; //#5255BC
    border-radius: 50%;
    border-color: transparent;
  }

  &--active,
  &--range,
  &--rangeStart,
  &--rangeEnd,
  &--rangeBothEnds {
    background-color: ${p => p.theme.colors.accent}; //#5255BC
    color: ${p => p.theme.colors.white}; //#fff
    border-radius: 50%;
    border-color: transparent;
  }

  &--neighboringMonth {
    opacity: 0.4;
  }
}
`;