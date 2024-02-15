import React, { useState } from 'react';
import { NeedHelpModal } from 'components/NeedHelpModal/NeedHelpModal.jsx';
import {
  HelpContainer,
  HelpImage,
  HelpButton,
  HelpText,
  ButtonText,
  IconContainer,
  TaskPro,
} from './HelpApp.styled.js';
import flowerImage from './../../images/flower.png';
import { CiCircleQuestion } from 'react-icons/ci';
import { useTranslation } from 'react-i18next';

const HelpApp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation('global');
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <HelpContainer>
      <HelpImage src={flowerImage} alt="flower" />
      <HelpText>
        {t('screenPage.static.help')} <TaskPro>TaskPro</TaskPro>
        {t('screenPage.static.help2')}
      </HelpText>
      <HelpButton onClick={openModal}>
        <IconContainer>
          <CiCircleQuestion />
        </IconContainer>
      </HelpButton>

      <ButtonText onClick={openModal}>
        {t('screenPage.static.needHelp')}
      </ButtonText>

      {isModalOpen && (
        <NeedHelpModal isOpen={isModalOpen} onClose={closeModal} />
      )}
    </HelpContainer>
  );
};
export default HelpApp;
