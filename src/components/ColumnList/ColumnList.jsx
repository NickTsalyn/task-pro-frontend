import { ColumnListItem } from 'components/ColumnListItem/ColumnListItem';
import { ColumnListStyled } from './ColumnList.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllColumns } from '../../redux/columns/operations';
import { selectColumns} from '../../redux/columns/selectors'

// приходить масив колонок
//список колонок
export const ColumnList = () => {
    const dispatch = useDispatch();
    const columns = useSelector(selectColumns);

    useEffect(() => {
      dispatch(getAllColumns());
    }, [dispatch]);

  return (
      <ColumnListStyled>
          
     {columns.length > 0 && (
      <ul>
        {columns.map(column => (
          <li key={column.id}>           
            <ColumnListItem column={column}/>            
         </li>
        ))}
      </ul>
    )}

      {/* <ColumnListItem/> 
            <ColumnListItem/>                        */}

    </ColumnListStyled>
  );
};
