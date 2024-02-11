import React from 'react';

import { HeaderDashboard } from 'components/HeaderDashboard/HeaderDashboard';
import { ColumnList } from 'components/ColumnList/ColumnList';
import { ScreensPageWrapper } from './ScreensPage.styled';
// import { Outlet } from 'react-router-dom';

export default function ScreensPage() {
  return (
    <>
      <ScreensPageWrapper>
        <HeaderDashboard />
        {/* <Suspense fallback={null}>
          <Outlet />
        </Suspense> */}
        <ColumnList />
        <button>ButtonAddAnotherColumn</button>
      </ScreensPageWrapper>
    </>
  );
}
