import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import toast, { Toaster } from 'react-hot-toast';
import { AddColumnModal } from '../ColumnModal/AddColumnModal/AddColumnModal';
import sprite from '../../images/icons.svg';
import {
  addColumn,
} from '../../redux/columns/operations';

import {  
  ModalShowButton,
  AddColumnTitle,
  AddColumnInput,
  AddColumnBtn,
  IconWhiteWrap,
  IconVioletWrap,
  StyledSvgWhitePlus,
  StyledSvgDarkPlus,
} from '../Button/AddColumnButton.styled';
import { useParams } from 'react-router-dom';

export const AddColumnButton = ({ columnId }) => {
  const [modalAddColumnIsOpen, setModalAddColumnIsOpen] = useState(false);

  const dispatch = useDispatch();
  const {boardId} = useParams();
  const handlerAddColumn = evt => {
    evt.preventDefault();
    const inputValue = evt.target.title.value.trim();
    if (inputValue !== '') {
      const newColumn = {
        title: inputValue,
        dashboardId:boardId
      };
     
      dispatch(addColumn(newColumn));
      setModalAddColumnIsOpen(false); 
      console.log(inputValue);
      console.log(newColumn);
      return;
    }
    return;
  };

    return (    
      <>
        <ModalShowButton
          type="submit"
          onClick={() => setModalAddColumnIsOpen(true)}
        >
          <IconVioletWrap>
            <StyledSvgWhitePlus>
              <use xlinkHref={`${sprite}#icon-plus`}></use>
            </StyledSvgWhitePlus>
          </IconVioletWrap>
          Add another column
        </ModalShowButton>

              <AddColumnModal
          isOpen={modalAddColumnIsOpen}
          onClose={() => setModalAddColumnIsOpen(false)}
          submitButton="Add"
        >
          <div>
            <AddColumnTitle>Add column</AddColumnTitle>
            <form onSubmit={handlerAddColumn}>
              <AddColumnInput
                type="text"
                name="title"
                placeholder="Title"
                autoFocus
              />

              <AddColumnBtn type="submit">
                <IconWhiteWrap>
                  <StyledSvgDarkPlus>
                    <use xlinkHref={`${sprite}#icon-plus`}></use>
                  </StyledSvgDarkPlus>
                </IconWhiteWrap>
                Add
              </AddColumnBtn>
            </form>
          </div>
        </AddColumnModal>

        </>      
  );
};
