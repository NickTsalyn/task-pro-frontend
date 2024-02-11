// import { hover } from '@testing-library/user-event/dist/hover';
import React from 'react';
import Select from 'react-select';
import '../../Header/ThemeDropDown/theme.css';

const options = [
  { value: 'Light', label: 'Light' },
  { value: 'Dark', label: 'Dark' },
  { value: 'Violet', label: 'Violet' },
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
  const handleChangeTheme = selectedOption => {
    // i18n.changeLanguage(selectedOption.value);
  };
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
