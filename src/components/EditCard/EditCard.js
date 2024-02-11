import { Formik } from 'formik';
import 'react-datepicker/dist/react-datepicker.css';
import sprite from '../../images/icons.svg';


import {
  EditCardBtn,
  EditCardButtonSvg,
  EditCardColorCont,
  EditCardContCal,
  EditCardContMark,
  EditCardContainer,
  EditCardDate,
  EditCardDescription,
  EditCardHeader,
  EditCardLabelColor,
  EditCardLabelText,
  EditCardOptionCont,
  EditCardSvgButtonText,
  EditCardSvgContainer,
  EditCardTextCal,
  EditCardTextCont,
  EditCardTitle,
  EditCardWrapper,
} from './EditCard.styled';
import { useState } from 'react';
import { CLoseButton } from 'components/EditProfileModal/EditProfileModal.styled';

export const EditCard = ({ onCloseModal }) => {
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
      <EditCardWrapper>
        <CLoseButton onClick = {onCloseModal}>Close</CLoseButton>
        <EditCardContainer>
          <EditCardHeader>Add Card</EditCardHeader>
          <EditCardTextCont>
            <EditCardTitle name="title" placeholder="Title" />
            <EditCardDescription
              name="description"
              as="textarea"
              placeholder="Description"
            />
          </EditCardTextCont>
          <EditCardOptionCont>
            <EditCardColorCont>
              <EditCardLabelText>Label color</EditCardLabelText>

              <label>
                <EditCardContMark>
                  <EditCardLabelColor type="radio" name="color" value="blue" />
                  <EditCardLabelColor type="radio" name="color" value="pink" />
                  <EditCardLabelColor type="radio" name="color" value="green" />
                  <EditCardLabelColor type="radio" name="color" value="gray" />
                </EditCardContMark>
              </label>
            </EditCardColorCont>
            <EditCardContCal>
              <EditCardTextCal>DeadLine</EditCardTextCal>
              <EditCardDate
                selected={startDate}
                onChange={date => setStartDate(date)}
                dateFormat={
                  isToday(startDate) ? "'Today,' MMMM d" : 'EEEE,MMMM d'
                }
                showWeekNumbers
              />
            </EditCardContCal>
          </EditCardOptionCont>
        </EditCardContainer>
        <EditCardBtn type="submit">
          <EditCardSvgContainer>
            <EditCardButtonSvg>
              <use xlinkHref={`${sprite}#icon-plus`}></use>
            </EditCardButtonSvg>
          </EditCardSvgContainer>
          <EditCardSvgButtonText>Add</EditCardSvgButtonText>
        </EditCardBtn>
      </EditCardWrapper>
    </Formik>
  );
};