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
    backgroundColor: 'none',
    color: state.isFocused ? 'rgba(22, 22, 22)' : 'rgba(22, 22, 22, 0.8)',
    border: 'none ',
    boxShadow: 'none',
    display: 'flex',
    padding: '14px 0 ',
    '@media only screen and (min-width: 1440px)': {
      padding: '18px 0',
    },
  }),

  dropdownIndicator: provided => ({
    ...provided,
    '&::before': {
      content: 'none',
    },
  }),

  option: (provided, state) => ({
    ...provided,
    backgroundColor: '#fff',
    color: 'rgb(22, 22, 22)',
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
      options={options}
      styles={customStyles}
      onChange={handleChangeTheme}
      placeholder="Theme"
      classNamePrefix="custom-select"
    />
  );
};
