// import { StyledSVGDropDown, StyledThemeBtn, StyledThemeDropDown } from './ThemeDropDown.styled';
// import sprite from '../../../images/icons.svg';

import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'Light', label: 'Light' },
  { value: 'Dark', label: 'Dark' },
  { value: 'Violet', label: 'Violet' },
];

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: '#fff',
    color: 'rgba(22, 22, 22, 0.8)',
    // color: state.isFocused ? 'var(--accent)' : 'var(--text)',
    border: 'none ',
    boxShadow: 'none',
    minHeight: '100%',
    // cursor: 'none',
    display: 'flex',
    // margin: 'auto 0px',
    // padding: '14px 0 ',
    padding: '0',
    // @media screen and (min-width: 1440px) {
    // }
    // marginTop: '20px'
    // borderRadius: ' 1px solid rgba(236, 237, 253, 0.4)'
  }),
  input: (provided, state) => ({
    ...provided,
    border: 'none',
    outline: 'none',
    margin: '0',
    padding: '0',
  }),
  valueContainer: provided => ({
    ...provided,
    fontWeight: '500',
    letterSpacing: '-0.02em',
    padding: '0',
  }),
  dropdownIndicator: provided => ({
    ...provided,
    '&::before': {
      content: 'none', // Встановлюємо вміст на none для псевдоелемента ::before
    },
  }),
  indicatorsContainer: provided => ({
    ...provided,
    padding: '0',
  }),
  indicatorSeparator: provided => ({
    ...provided,
    width: '0px',
  }),
  menu: provided => ({
    ...provided,
    border: '1px solid #ecedfd',
    borderRadius: '8px',
    width: '100px',
    height: '107px',
    margin:'0'
  }),

  option: (provided, state) => ({
    ...provided,
    backgroundColor: '#fff',
    color: 'rgb(22, 22, 22)',
    ':hover': { color: '#5255bc' },
  }),
  placeholder: provided => ({
    ...provided,
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
