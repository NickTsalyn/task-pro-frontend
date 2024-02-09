import React from 'react';
// import sprite from '../../images/icons.svg';
import { HelpContainer, HelpImage, HelpButton, HelpText, ButtonText, IconContainer, TaskProLink} from './HelpApp.styled.js';
import flowerImage from './../../images/flower.png';
import { CiCircleQuestion } from "react-icons/ci";

const HelpApp = ({ openModal }) => {
  return (
    <HelpContainer>
      <HelpImage src={flowerImage} alt="flower" />
      <HelpText>
        If you need help with <TaskProLink href="#">TaskPro</TaskProLink>, check out our support resources or reach out to our customer support team.
      </HelpText>
      <HelpButton onClick={openModal}>
      <IconContainer>
          <CiCircleQuestion/>
        </IconContainer>
      </HelpButton>
     
      <ButtonText onClick={openModal}>Need help?</ButtonText>
    </HelpContainer>
  );
}; 
export default HelpApp;
