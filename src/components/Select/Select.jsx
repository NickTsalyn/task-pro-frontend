import React from 'react';
import Select from 'react-select';
import { useTranslation } from 'react-i18next';

const options = [
  { value: 'ua', label: 'Ukraine' },
  { value: 'en', label: 'United Kingdom' },
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
    backgroundColor: '#FCFCFC',
    color: state.isFocused ? 'var(--accent)' : 'var(--text)',
    border: 'none',
    borderRadius: '25px',
    boxShadow:  'none',
    '&:hover': {
    //   backgroundColor: 'var(--text)',
      color: '#5255BC'
    }
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? 'var(--text)' : '#FCFCFC',
    color: state.isSelected ? '#5255BC' : 'var(--text)',
    '&:hover': {
      backgroundColor: '#FCFCFC',
      color: '#5255BC'
    }
  }),
  placeholder: (provided) => ({
    ...provided,
    color: 'var(--text)',
    '&:hover': {
        color: '#5255BC'
      }
}),
    menu: (provided) => ({
        ...provided,
        maxHeight: '100px'
        // overflow: 'auto'
    })
};

const CustomDropdown = () => {
    const { i18n } = useTranslation('global');


  const handleChangeLanguage = selectedOption => {
    i18n.changeLanguage(selectedOption.value);
  };
  return (
    <Select
      options={options}
      styles={customStyles}
      onChange={handleChangeLanguage}
      placeholder="--Choose Language--"
    />
  );
};

export default CustomDropdown;
