import React, { useEffect, useRef, useState } from 'react';
import Select, { components } from 'react-select';
import { useTranslation } from 'react-i18next';
import { GrLanguage } from 'react-icons/gr';
import '/node_modules/flag-icons/css/flag-icons.min.css';

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
  {
    value: 'ua',
    label: (
      <span>
        <span class="fi fi-ua"></span> Ukraine
      </span>
    ),
  },
  {
    value: 'en',
    label: (
      <span>
        <span class="fi fi-gb"></span> UK
      </span>
    ),
  },
  {
    value: 'cn',
    label: (
      <span>
        <span class="fi fi-cn"></span> China
      </span>
    ),
  },
  {
    value: 'he',
    label: (
      <span>
        <span class="fi fi-il"></span> Israel
      </span>
    ),
  },
  {
    value: 'de',
    label: (
      <span>
        <span class="fi fi-de"></span> Germany
      </span>
    ),
  },
  {
    value: 'es',
    label: (
      <span>
        <span class="fi fi-es"></span> Spain
      </span>
    ),
  },
  {
    value: 'ita',
    label: (
      <span>
        <span class="fi fi-it"></span> Italy
      </span>
    ),
  },
  {
    value: 'fr',
    label: (
      <span>
        <span class="fi fi-fr"></span> France
      </span>
    ),
  },
  {
    value: 'jp',
    label: (
      <span>
        <span class="fi fi-jp"></span> Japan
      </span>
    ),
  },
  {
    value: 'pl',
    label: (
      <span>
        <span class="fi fi-pl"></span> Poland
      </span>
    ),
  },
  {
    value: 'ro',
    label: (
      <span>
        <span class="fi fi-ro"></span> Romania
      </span>
    ),
  },
  {
    value: 'ar',
    label: (
      <span>
        <span class="fi fi-sa"></span> Saudi Arabia
      </span>
    ),
  },
  {
    value: 'gr',
    label: (
      <span>
        <span class="fi fi-gr"></span> Greece
      </span>
    ),
  },
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
    width: '120px',

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
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const selectRef = useRef(null);
  const handleChangeLanguage = selectedOption => {
    i18n.changeLanguage(selectedOption.value);
    setMenuIsOpen(false);
  };
  const handleClickOutside = event => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setMenuIsOpen(false);
    }
  };

  const toggleSelect = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  return (
    <div ref={selectRef}>
      <Select
        components={IconLanguage}
        options={options}
        styles={customStyles}
        onChange={handleChangeLanguage}
        placeholder=""
        menuIsOpen={menuIsOpen}
        onMenuOpen={toggleSelect}
        onMenuClose={toggleSelect}
      />{' '}
    </div>
  );
};

export default CustomDropdown;
