import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import sprite from '../../images/icons.svg';
import { NeedHelpModal } from 'components/NeedHelpModal/NeedHelpModal.jsx';
import {
  HelpContainer,
  HelpImage,
  HelpButton,
  HelpText,
  ButtonText,
  TaskPro,
  QuestionSVG,
} from './HelpApp.styled.js';
import flowerImage from './../../images/flower.png';

const HelpApp = ({ onItemClick }) => {
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
        <QuestionSVG>
          <use xlinkHref={`${sprite}#icon-help-circle`} />
        </QuestionSVG>
      </HelpButton>
      <ButtonText onClick={openModal}>
        {t('screenPage.static.needHelp')}
      </ButtonText>

      {isModalOpen && (
        <NeedHelpModal
          isOpen={isModalOpen}
          onClose={closeModal}
          onItemClick={onItemClick}
        />
      )}
    </HelpContainer>
  );
};
export default HelpApp;
