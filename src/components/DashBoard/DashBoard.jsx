// import Filter from 'components/HeaderDashboard/Filter';

import { ColumnList } from 'components/ColumnList/ColumnList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getColumsById } from 'redux/columns/operations';
// import { selectColumns } from 'redux/columns/selectors';

const DashBoard = () => {
  const {boardId} = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getColumsById(boardId))
  
  }, [boardId])
  

  return (
    <section style={{ position: 'relative' }}>
      {/* <Filter /> */}
      <ColumnList />
    </section>
  );
};

export default DashBoard;
