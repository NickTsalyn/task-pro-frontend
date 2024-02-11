import React from 'react';

import { HeaderDashboard } from 'components/HeaderDashboard/HeaderDashboard';
import { ScreensPageWrapper } from './ScreensPage.styled';
import DashBoard from 'components/DashBoard/DashBoard';

export default function ScreensPage() {    
  
  return (    
      <ScreensPageWrapper>
        <HeaderDashboard />
        <DashBoard/>
        {/* {(boards.length === 0 && filteredColumns.length === 0) ? <ColumnList columns={filteredColumns}/> : <AddColumnButton/> } */}
        
      </ScreensPageWrapper>    
  );
}
