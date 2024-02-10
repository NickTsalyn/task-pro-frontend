import React, { useEffect } from 'react';

import { HeaderDashboard } from 'components/HeaderDashboard/HeaderDashboard';
import { ColumnList } from 'components/ColumnList/ColumnList';
import { ScreensPageWrapper } from './ScreensPage.styled';
import { useDispatch } from 'react-redux';
import { getAllColumns } from 'redux/columns/operations';
// import { AddColumnButton } from 'components/Button/AddColumnButton';

export default function ScreensPage () {
  const dispatch = useDispatch()
  useEffect(() => {
      
    dispatch(getAllColumns());
      
    }, [dispatch]);
  return (
    <>
      <ScreensPageWrapper>
        <HeaderDashboard />
        <ColumnList />
        {/* <AddColumnButton/> */}
      </ScreensPageWrapper>
    </>
  );
};
