import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { HeaderDashboard } from 'components/HeaderDashboard/HeaderDashboard';
import { ScreensPageWrapper } from './ScreensPage.styled';
import { getBoardById } from 'redux/boards/operations';
import { selectAllBoards } from 'redux/boards/selectors';
import { ButtonText, Text } from './HomePage.styled';
import { selectColumns } from 'redux/columns/selectors';
import { ColumnList } from 'components/ColumnList/ColumnList';
import { getAllColumns } from 'redux/columns/operations';

export default function ScreensPage() {
  const dispatch = useDispatch();
  const { boardId } = useParams();

  useEffect(() => {
    dispatch(getBoardById(boardId));
  }, [boardId, dispatch]);

  useEffect(() => {
    dispatch(getAllColumns());
  }, [dispatch]);

  const { t } = useTranslation('global');
  const boards = useSelector(selectAllBoards);
  const columns = useSelector(selectColumns); //приходить масив колонок;
  const filteredColumns = columns.filter(column => column.board === boardId);
  // console.log(filteredColumns);
  let project = [];
  if (boardId) {
    project = boards.find(board => board._id === boardId);
  }
  return (
    <ScreensPageWrapper>
      <HeaderDashboard project={project} />
      {boards.length === 0 ? (
        <Text>
          {t('screenPage.static.message1')}
          <ButtonText>{t('screenPage.static.message2')}</ButtonText>
          {t('screenPage.static.message3')}
        </Text>
      ) : (
        <ColumnList columns={filteredColumns} />
      )}

      {/* {(boards.length === 0 && filteredColumns.length === 0) ? <ColumnList columns={filteredColumns}/> : <AddColumnButton/> } */}
      {/* <DashBoard/> */}
    </ScreensPageWrapper>
  );
}
