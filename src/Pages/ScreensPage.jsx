import React from 'react';
import { useSelector } from 'react-redux';
import { selectBoardById } from 'redux/boards/selectors';
import { HeaderDashboard } from 'components/HeaderDashboard/HeaderDashboard';
import { ScreensPageWrapper } from './ScreensPage.styled';
import DashBoard from 'components/DashBoard/DashBoard';

export default function ScreensPage() {
  const board = useSelector(selectBoardById);

  return (
    <ScreensPageWrapper back={board.backgroundURL}>
      <HeaderDashboard />
      <DashBoard />    
    </ScreensPageWrapper>
  );
}
