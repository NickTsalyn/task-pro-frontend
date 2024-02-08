import { Header } from 'components/Header/Header';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
// import { Loader } from 'components/Loader/Loader';

const HomeWrapper = styled.div`
  min-height: 100vh;
  margin: 0 auto;
`;



export default function HomePage() {
  const { t } = useTranslation('global');

  return (
    <HomeWrapper>
      <Header />
      <Text>{t('screenPage.static.message1')}<TextA>{t('screenPage.static.message2')}</TextA>{t('screenPage.static.message3')}</Text>

      {/* <Loader/>            */}
      <Suspense fallback={null}>
          <Outlet />
        </Suspense>    
    </HomeWrapper>
  );
}

