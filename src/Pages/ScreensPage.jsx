import React from 'react';

import { HeaderDashboard } from 'components/HeaderDashboard/HeaderDashboard';
import { ColumnList } from 'components/ColumnList/ColumnList';
import { ScreensPageWrapper } from './ScreensPage.styled';

export const ScreensPage = () => {
  return (
    <>
      <ScreensPageWrapper>
        <HeaderDashboard />
        <ColumnList />
        <button>ButtonAddAnotherColumn</button>
      </ScreensPageWrapper>
    </>
  );
};
