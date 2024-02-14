import React from 'react';
import sprite from 'images/icons.svg';
import {
  StyledCreateBtn,
  StyledButton,
  StyledSVG,
} from './addBoardButton.styled';
import { useTranslation } from 'react-i18next';

export const AddBoardButton = ({ onClick }) => {
  const { t } = useTranslation('global');
  return (
    <StyledCreateBtn onClick={onClick}>
      {t('screenPage.static.addBoard')}
      <StyledButton>
        <StyledSVG>
          <use xlinkHref={`${sprite}#icon-plus`}></use>
        </StyledSVG>
      </StyledButton>
    </StyledCreateBtn>
  );
};
