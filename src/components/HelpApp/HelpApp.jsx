import React from 'react';
// import sprite from '../../images/icons.svg';
import { HelpContainer, HelpImage, HelpButton, HelpText, ButtonText, IconContainer, TaskProLink} from './HelpApp.styled.js';
import flowerImage from './../../images/flower.png';
import { CiCircleQuestion } from "react-icons/ci";
import { useTranslation } from 'react-i18next';

const HelpApp = ({ openModal }) => {
  const {t} = useTranslation('global')
  return (
    <HelpContainer>
      <HelpImage src={flowerImage} alt="flower" />
      <HelpText>
        {t('screenPage.static.help')} <TaskProLink href="#">TaskPro </TaskProLink>{t('screenPage.static.help2')}
      </HelpText>
      <HelpButton onClick={openModal}>
      <IconContainer>
          <CiCircleQuestion/>
        </IconContainer>
      </HelpButton>
     
      <ButtonText onClick={openModal}>{t('screenPage.static.needHelp')}</ButtonText>
    </HelpContainer>
  );
}; 
export default HelpApp;
// icon-help-circle

/**
import { NeedHelp } from 'components/needhelp/needhelp';
import { NeedHelpModal } from 'components/needhelp/needHelpModal';
 begin
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
 
  const closeModal = () => {
    setIsModalOpen(false);
  };
  ********************************************
  return
    <div>
      <NeedHelp openModal={openModal} />
      {isModalOpen && <NeedHelpModal onClose={closeModal} />}
    </div>
 */