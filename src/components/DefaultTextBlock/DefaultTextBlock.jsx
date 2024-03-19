import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBoard } from 'redux/boards/operations';
import { useTranslation } from 'react-i18next';

import { ButtonText, Text, TextWrapper } from './DefaultTextBlock.styled';
import { BoardModalBase } from 'components/boardModals/ModalsBase/BoardModalBase';

export const DefaultTextBlock = () => {
  const { t } = useTranslation('global');
  const dispatch = useDispatch();
  const [isModalOpen, setOpenModal] = useState(false);

  function CloseModal() {
    setOpenModal(false);
  }

  function OpenModal(event) {
    event.stopPropagation();
    setOpenModal(true);
  }

  function SubmitForm(info) {
    dispatch(addBoard(info));
    setOpenModal(false);
  }

  return (
    <TextWrapper>
      <Text>
        {t('screenPage.static.message1')}
        <ButtonText type="button" onClick={event => OpenModal(event)}>
          {t('screenPage.static.message2')}
        </ButtonText>
        {t('screenPage.static.message3')}
      </Text>
      {isModalOpen && (
        <BoardModalBase
          isModalOpen={isModalOpen}
          info={{ title: '', icon: 'icon-Project', background: '0' }}
          onCloseModal={CloseModal}
          action={'add'}
          SubmitForm={SubmitForm}
        />
      )}
    </TextWrapper>
  );
};
