import React from "react";
import 'react-datepicker/dist/react-datepicker.css';
import { DatePickerCalendar } from "./DatePicker.styled";



export const DatePickerNew = ({ selectedDate, handleDateChange }) => {

  
    
  return (
      <DatePickerCalendar>
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
      </DatePickerCalendar> 
      
    );
  };

