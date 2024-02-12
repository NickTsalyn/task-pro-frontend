import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NeedHelpModal } from 'components/NeedHelpModal/NeedHelpModal.jsx';
import { HelpContainer, HelpImage, HelpButton, HelpText, ButtonText, IconContainer, TaskPro} from './HelpApp.styled.js';
import flowerImage from './../../images/flower.png';
import { AiOutlineQuestionCircle } from "react-icons/ai";

const HelpApp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation('global'); // Вказуємо простір імен для перекладу

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
        {t('screenPage.static.help')} {/* Використання ключа для перекладу тексту */}
        <TaskPro>TaskPro</TaskPro>
        {t('screenPage.static.help2')} {/* Використання іншого ключа для перекладу тексту */}
      </HelpText>
      <HelpButton onClick={openModal}>
        <IconContainer>
          <AiOutlineQuestionCircle/>
        </IconContainer>
      </HelpButton>
      <ButtonText onClick={openModal}>
        {t('screenPage.static.needHelp')} {/* Використання ще одного ключа для перекладу тексту */}
      </ButtonText>
      {isModalOpen && 
        <NeedHelpModal 
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      }
    </HelpContainer>
  );
}; 
export default HelpApp;
