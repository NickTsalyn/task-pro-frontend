import { Formik } from 'formik';
import 'react-datepicker/dist/react-datepicker.css';
import sprite from '../../images/icons.svg';


import {
  AddCardBtn,
  AddCardButtonSvg,
  AddCardColorCont,
  AddCardContCal,
  AddCardContMark,
  AddCardContainer,
  AddCardDate,
  AddCardDescription,
  AddCardHeader,
  AddCardLabelColor,
  AddCardLabelText,
  AddCardOptionCont,
  AddCardSvgButtonText,
  AddCardSvgContainer,
  AddCardTextCal,
  AddCardTextCont,
  AddCardTitle,
  AddCardWrapper,
} from './AddCard.styled';
import { useState } from 'react';
import { CLoseButton } from 'components/EditProfileModal/EditProfileModal.styled';

export const AddCard = ({ onCloseModal }) => {
  const [startDate, setStartDate] = useState(new Date());

  const isToday = date => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      //   validationSchema={SignupSchema}
      onSubmit={(values, actions) => {
        // submit(values);
        actions.resetForm();
      }}
    >
      <AddCardWrapper>
        <CLoseButton onClick = {onCloseModal}>Close</CLoseButton>
        <AddCardContainer>
          <AddCardHeader>Add Card</AddCardHeader>
          <AddCardTextCont>
            <AddCardTitle name="title" placeholder="Title" />
            <AddCardDescription
              name="description"
              as="textarea"
              placeholder="Description"
            />
          </AddCardTextCont>
          <AddCardOptionCont>
            <AddCardColorCont>
              <AddCardLabelText>Label color</AddCardLabelText>

              <label>
                <AddCardContMark>
                  <AddCardLabelColor type="radio" name="color" value="blue" />
                  <AddCardLabelColor type="radio" name="color" value="pink" />
                  <AddCardLabelColor type="radio" name="color" value="green" />
                  <AddCardLabelColor type="radio" name="color" value="gray" />
                </AddCardContMark>
              </label>
            </AddCardColorCont>
            <AddCardContCal>
              <AddCardTextCal>DeadLine</AddCardTextCal>
              <AddCardDate
                selected={startDate}
                onChange={date => setStartDate(date)}
                dateFormat={
                  isToday(startDate) ? "'Today,' MMMM d" : 'EEEE,MMMM d'
                }
                showWeekNumbers
              />
            </AddCardContCal>
          </AddCardOptionCont>
        </AddCardContainer>
        <AddCardBtn type="submit">
          <AddCardSvgContainer>
            <AddCardButtonSvg>
              <use xlinkHref={`${sprite}#icon-plus`}></use>
            </AddCardButtonSvg>
          </AddCardSvgContainer>
          <AddCardSvgButtonText>Add</AddCardSvgButtonText>
        </AddCardBtn>
      </AddCardWrapper>
    </Formik>
  );
};
