// import { hover } from '@testing-library/user-event/dist/hover';
import React from 'react';
import Select from 'react-select';
import '../../Header/ThemeDropDown/theme.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectedTheme } from 'redux/auth/selectors';
import { changeTheme } from 'redux/auth/operations';

const options = [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
  { value: 'violet', label: 'Violet' },
];

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: 'transparent',
    color: state.isFocused ? 'rgba(22, 22, 22)' : 'rgba(22, 22, 22, 0.8)',
    border: 'none ',
    boxShadow: 'none',
    display: 'flex',
    margin: 'auto 0',
    padding: '0',
    minHeight: '0',
    lineHeight: '1'
  }),

  downChevron:  provided => ({
    ...provided,
    width: '16px',
    height: '16px',
    padding: '0',
    margin: '0 auto'
   
  }),

  indicatorSeparator: 
  provided => ({
    ...provided,
   display: 'none'
  }),

  input: (provided) => ({
    ...provided,
    display: 'none'
  }),
  dropdownIndicator: provided => ({
    ...provided,
    padding: '0',
    margin: 'auto 0',
    
    '&::before': {
      content: 'none',
    },
  }),

  option: (provided, state) => ({
    ...provided,
    backgroundColor: '#fff',
    color: state.isSelected ? '#5255BC' :'rgb(22, 22, 22)',
    '&:hover, &:focus': {
      color: '#5255bc',
    },
  }),
  placeholder: provided => ({
    ...provided,
    fontWeight: '500',
    fontSize: '14px',
    letterSpacing: '-0.02em',
    color: 'rgba(22, 22, 22, 0.8)',
  }),
};


export const ThemeDropDown = () => {
  const dispatch = useDispatch();

  const handleChangeTheme = ( options) => {
    // i18n.changeLanguage(selectedOption.value);
    const theme = options.value;
    console.log(theme);
    dispatch(changeTheme( {theme} ));
  };
  
  const currentTheme = useSelector(selectedTheme);
  console.log(currentTheme);

  return (
    <Select 
    // value={currentTheme} 
    // onChange={handleThemeChange}
      options={options}
      styles={customStyles}
      onChange={handleChangeTheme}
      placeholder="Theme"
      // classNamePrefix="custom-select"
    />
  );
};
