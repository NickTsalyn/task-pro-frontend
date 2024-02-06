import React from 'react';

import { HeaderDashboard } from 'components/HeaderDashboard/HeaderDashboard';
import { ColumnList } from 'components/ColumnList/ColumnList';
import { ScreensPageWrapper } from './ScreensPage.styled';

export default function ScreensPage () {
  return (
    <>
    <ScreensPageWrapper>
      <HeaderDashboard/>    
      <ColumnList/>
      <button>ButtonAddAnotherColumn</button>
    </ScreensPageWrapper>
    
    
    </>
    
  )
}
