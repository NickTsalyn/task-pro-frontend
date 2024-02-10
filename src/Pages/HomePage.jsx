import { Header } from 'components/Header/Header';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {  
  // ButtonText, 
  HomeWrapper,
  //  Text 
  } from './HomePage.styled';
// import { useTranslation } from 'react-i18next';
// import { useSelector } from 'react-redux';
// import { selectAllBoards } from 'redux/boards/selectors';

import ScreensPage from './ScreensPage';

export default function HomePage() {
  // const { t } = useTranslation('global');
  // const boards = useSelector(selectAllBoards);

  return (
    <HomeWrapper>
      <Header />
      {/* {!boards.length && 
      <Text>{t('screenPage.static.message1')}
      <ButtonText>{t('screenPage.static.message2')}</ButtonText>
      {t('screenPage.static.message3')}</Text>} */}
      <ScreensPage/>
      {/* <Suspense fallback={null}>
          <Outlet />
        </Suspense>     */}
    </HomeWrapper>
  );
}