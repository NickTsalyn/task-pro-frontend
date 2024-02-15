import React from 'react';
import Select, { components } from 'react-select';
import { useTranslation } from 'react-i18next';
import { GrLanguage } from 'react-icons/gr';

const CustomDropdownIcon = () => <GrLanguage />;

const IconLanguage = {
  DropdownIndicator: props => {
    return (
      <components.DropdownIndicator {...props}>
        <CustomDropdownIcon width="32" height="32" />
      </components.DropdownIndicator>
    );
  },
};

const options = [
  { value: 'ua', label: 'Ukraine' },
  { value: 'en', label: 'UK' },
  { value: 'cn', label: 'China' },
  { value: 'he', label: 'Israel' },
  { value: 'de', label: 'Germany' },
  { value: 'es', label: 'Spain' },
  { value: 'ita', label: 'Italy' },
  { value: 'fr', label: 'France' },
  { value: 'jp', label: 'Japan' },
  { value: 'pl', label: 'Poland' },
  { value: 'ro', label: 'Romania' },
  { value: 'ar', label: 'Turkey' },
  { value: 'gr', label: 'Greece' },
];

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    color: state.isFocused ? 'rgba(22, 22, 22)' : 'rgba(22, 22, 22, 0.8)',
    border: 'none ',
    boxShadow: 'none',
    display: 'flex',
    margin: 'auto 0',
    padding: '0',
    minHeight: '0',
    lineHeight: '1',
  }),

  downChevron: provided => ({
    ...provided,
    width: '32px',
    height: '32px',
    padding: '0',
  }),

  IndicatorContainer: provided => ({
    ...provided,
    display: 'none',
  }),

  indicatorSeparator: provided => ({
    ...provided,
    display: 'none',
  }),

  input: provided => ({
    ...provided,
    display: 'none',
  }),

  dropdownIndicator: provided => ({
    ...provided,
    padding: '0',
    color: 'rgb(22, 22, 22, 0.8)',
    '&:hover, &:focus': {
      color: '#5255bc',
    },
    '&::before': {
      content: 'none',
    },
  }),

  option: (provided, state) => ({
    ...provided,
    backgroundColor: '#fff',
    color: state.isSelected ? '#5255BC' : 'rgb(22, 22, 22)',

    '&:hover': {
      backgroundColor: '#FCFCFC',
      color: '#5255BC',
    },
  }),
  placeholder: provided => ({
    ...provided,
    display: 'none',
  }),
  menu: provided => ({
    ...provided,
    maxHeight: '120px',
    width: '110px',

    backgroundColor: 'white',
    borderRadius: '8px',

    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      width: '4px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(22, 22, 22, 0.2)',
      borderRadius: '8px',
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: 'transparent',
    },
  }),
  menuList: provided => ({
    ...provided,

    overflowY: 'none',
  }),
};

export const CustomDropdown = () => {
  const { i18n } = useTranslation('global');

  const handleChangeLanguage = selectedOption => {
    i18n.changeLanguage(selectedOption.value);
  };
  return (
    <Select
      components={IconLanguage}
      options={options}
      styles={customStyles}
      onChange={handleChangeLanguage}
      placeholder=""
    />
  );
};

export default CustomDropdown;
