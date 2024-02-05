import { Header } from 'components/Header/Header';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { ScreensPage } from './ScreensPage';

const HomeWrapper = styled.div`
  min-height: 100vh;
  margin: 0 auto;
`;

export default function HomePage() {
  return (
    <HomeWrapper>
      <Header />
      <ScreensPage />
      {/* <div>HeaderHomePage</div>( шапка HomePage) */}
      {/* <Suspense fallback={null}>
        <Outlet />
      </Suspense> */}
    </HomeWrapper>
  );
}
