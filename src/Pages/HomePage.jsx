import { Header } from 'components/Header/Header';
import React, { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { ButtonText, HomeWrapper, Text } from './HomePage.styled';
import { useTranslation } from 'react-i18next';
import HeaderDashboard from 'components/HeaderDashboard/HeaderDashboard';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllBoards } from 'redux/boards/selectors';
import { fetchBoards } from 'redux/boards/operations';
// import { Loader } from 'components/Loader/Loader';

export default function HomePage() {
  const { t } = useTranslation('global');
  const dispatch = useDispatch();
  const boards = useSelector(selectAllBoards);
  console.log(boards);
  useEffect(() => {
    dispatch(fetchBoards());
  }, [dispatch]);

  return (
    <HomeWrapper>
      <Header />
      {/* Sidebar */}
      <div style={{ position: 'relative' }}>
        <HeaderDashboard />
        {boards.length ? (
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        ) : (
          <Text>
            {t('screenPage.static.message1')}
            <ButtonText>{t('screenPage.static.message2')}</ButtonText>
            {t('screenPage.static.message3')}
          </Text>
        )}
      </div>
    </HomeWrapper>
  );
}
