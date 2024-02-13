import React from 'react';
import Select, {components} from 'react-select';
import { useTranslation } from 'react-i18next';
import { CustomDropdownIcon } from './Select.styled';

export const MySelect = () => {
  return (
    <Select
      components={{
        DropdownIndicator: props => {
          return (
            <components.DropdownIndicator {...props}>
              <CustomDropdownIcon />
            </components.DropdownIndicator>
          );
        },
      }}
      styles={customStyles}
    />
  );
};

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
  { value: 'tr', label: 'Turkey' },
  { value: 'gr', label: 'Greece' },
];

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    color: state.isFocused ? 'rgba(22, 22, 22)' : 'rgba(22, 22, 22, 0.8)',
    border: 'none ',
    boxShadow: 'none',
    display: 'flex',
    margin: '0',
    padding: '0',
    minHeight: '0',
    lineHeight: '1',
    // '&:hover': {
    // //   backgroundColor: 'var(--text)',
    //   color: '#5255BC'
    // }
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

  dropdownIndicator: provided => ({
    ...provided,
    padding: '0',
  // width: '20',
  color: 'rgb(22, 22, 22)',
  '&:hover, &:focus': {
    color: '#5255bc',
  },
    // '&::before': {
    //   content: 'none',
    // },
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
    display: 'none'
    // fontWeight: '500',
    // fontSize: '14px',
    // letterSpacing: '-0.02em',
    // color: 'var(--text)',
    // '&:hover': {
    //     color: '#5255BC'
    //   }
}),
input: (provided) => ({
  ...provided,
  display: 'none'
}),
  // indicatorsContainer: provided => ({
  //   ...provided,
  
  // }),
    menu: (provided) => ({
        ...provided,
        maxHeight: '60px',
        width: '110px',
        backgroundColor: 'white'
        // overflow: 'auto'
    })
};

export const CustomDropdown = () => {
    const { i18n } = useTranslation('global');


  const handleChangeLanguage = selectedOption => {
    i18n.changeLanguage(selectedOption.value);
  };
  return (
    <Select
      options={options}
      styles={customStyles}
      onChange={handleChangeLanguage}
      // placeholder="--Choose Language--"
    />
  );
};

// export default CustomDropdown;
export default MySelect
