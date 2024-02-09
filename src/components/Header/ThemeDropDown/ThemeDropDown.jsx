
// import { StyledSVGDropDown, StyledThemeBtn, StyledThemeDropDown } from './ThemeDropDown.styled';
// import sprite from '../../../images/icons.svg';

import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'Light', label: 'Light' },
  { value: 'Dark', label: 'Dark' },
  { value: 'Violet', label: 'Violet' }
];

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: '#fff',
    color: 'rgba(22, 22, 22, 0.8)',
    // color: state.isFocused ? 'var(--accent)' : 'var(--text)',
    border: 'none ' ,
    boxShadow:  'none',
    // cursor: 'none',
    display: 'flex',
    padding: '14px 0 ',
        '@media only screen and (min-width: 1440px)': {
    padding: '18px 0'
    }
  }),
  input: (provided, state) => ({
    ...provided,
    border: 'none',
    outline: 'none',
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    '&::before': {
      content: 'none',  // Встановлюємо вміст на none для псевдоелемента ::before
    },
  }),

  option: (provided, state) => ({
    ...provided,
    backgroundColor: '#fff',
    color: 'rgb(22, 22, 22)',
  }),
  placeholder: (provided) => ({
    ...provided,
    fontWeight: '500',
fontSize: '14px',
letterSpacing: '-0.02em',
    color: 'rgba(22, 22, 22, 0.8)',
})
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
    />
  );
};

// export const ThemeDropDown = () => {
//   return (
//     <StyledThemeDropDown>
//       <StyledThemeBtn type="button">
//         Thema
//         <StyledSVGDropDown>
//           <use xlinkHref={`${sprite}#icon-chevron-down`}></use>
//         </StyledSVGDropDown>
//       </StyledThemeBtn>
//       {/* <StyledThemeList >
// <li >Light</li>
// <li >Dark</li>
// <li >Violet</li>
//            </StyledThemeList> */}
//     </StyledThemeDropDown>
//   );
// };
