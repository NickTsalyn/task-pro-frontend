// import { hover } from '@testing-library/user-event/dist/hover';
import React from 'react';
import Select from 'react-select';
import '../../Header/ThemeDropDown/theme.css';
import { useDispatch, useSelector } from 'react-redux';

const options = [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
  { value: 'violet', label: 'Violet' },
  { value: 'vgreen', label: 'Green' },
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
  // indicatorsContainer: provided => ({
  //   ...provided,
  //   width: '16px',
  //   height: '16px',
  // }),
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

  // const dispatch = useDispatch();
  // const currentTheme = useSelector(selectThemeName);

  // const handleThemeChange = (e) => {
  //   const selectedTheme = e.target.value;
  //    dispatch(changeTheme(selectedTheme));
  
  return (
    <Select 
    // value={currentTheme} 
    // onChange={handleThemeChange}
      options={options}
      styles={customStyles}
      // onChange={handleChangeTheme}
      placeholder="Theme"
      // classNamePrefix="custom-select"
    />
  );
};
