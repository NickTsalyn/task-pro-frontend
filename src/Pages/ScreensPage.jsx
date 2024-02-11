import React, { useEffect } from 'react';

import { HeaderDashboard } from 'components/HeaderDashboard/HeaderDashboard';
// import { ColumnList } from 'components/ColumnList/ColumnList';
import { ScreensPageWrapper } from './ScreensPage.styled';
import { useDispatch } from 'react-redux';
// import { getAllColumns } from 'redux/columns/operations';
import { getBoardById } from 'redux/boards/operations';
import { useParams } from 'react-router-dom';
import DashBoard from 'components/DashBoard/DashBoard';
import { Header } from 'components/Header/Header';
// import { AddColumnButton } from 'components/Button/AddColumnButton';

export default function ScreensPage() {
  const dispatch = useDispatch();
  const { boardId } = useParams();

  useEffect(() => {
    dispatch(getBoardById(boardId));
  }, [boardId]);

  return (
    <ScreensPageWrapper>
      <Header />
      <HeaderDashboard />
      {/* <ColumnList /> */}
      <DashBoard />
      {/* <AddColumnButton/> */}
    </ScreensPageWrapper>
  );
}
