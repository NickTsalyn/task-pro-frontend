import React from 'react';
import { useTranslation } from 'react-i18next';
import CustomDropdown from 'components/Select/Select';

export const SelectLanguage = () => {
  const { i18n } = useTranslation('global');

  const handleChange = lang => {
    i18n.changeLanguage(lang);
  };

  const handleChangeLanguage = e => {
    const selectedLanguage = e.target.value;
    handleChange(selectedLanguage);
  };

  return (
    <CustomDropdown
      handleChangeLanguage={handleChangeLanguage}
      handleChange={handleChange}
    />
  );
};
