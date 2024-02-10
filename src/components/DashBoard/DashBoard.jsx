
import { AddColumnButton } from 'components/Button/AddColumnButton';
import { ColumnList } from 'components/ColumnList/ColumnList';


import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectAllBoards } from 'redux/boards/selectors';
import { getColumsById } from 'redux/columns/operations';
import { selectColumns } from 'redux/columns/selectors';
import { ButtonText, Text } from './DashBoard.styled';
// import { selectColumns } from 'redux/columns/selectors';

const DashBoard = () => {
 const {boardId} = useParams();
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getColumsById(boardId))
  
  }, [boardId])
  const { t } = useTranslation('global');
  const boards = useSelector(selectAllBoards); 
  
  const columns = useSelector(selectColumns);//приходить масив колонок;
   const filteredColumns = columns.filter((column) => column.board === boardId);
    console.log(filteredColumns);

  return (
    <>    
      {!boards.length && 
      <Text>{t('screenPage.static.message1')}
      <ButtonText>{t('screenPage.static.message2')}</ButtonText>
      {t('screenPage.static.message3')}</Text>}
      {!filteredColumns ? <AddColumnButton/>:<ColumnList />}
    </>
  );
};

export default DashBoard;
