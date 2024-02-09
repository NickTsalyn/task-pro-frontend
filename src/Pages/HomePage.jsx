import { Header } from 'components/Header/Header';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {  ButtonText, HomeWrapper, Text } from './HomePage.styled';
import { useTranslation } from 'react-i18next';
// import { Loader } from 'components/Loader/Loader';



export default function HomePage() {
  const { t } = useTranslation('global');

  return (
    <HomeWrapper>
      <Header />
      <Text>{t('screenPage.static.message1')}<ButtonText>{t('screenPage.static.message2')}</ButtonText>{t('screenPage.static.message3')}</Text>
      {/* <Loader/>            */}
      <Suspense fallback={null}>
          <Outlet />
        </Suspense>    
    </HomeWrapper>
  );
}