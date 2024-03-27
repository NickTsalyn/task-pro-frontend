import { Field, Formik } from 'formik';

import sprite from '../../images/icons.svg';
import { CLoseButton } from '../../components/EditProfileModal/EditProfileModal.styled';

import {
  EditCardBtn,
  EditCardButtonSvg,
  EditCardColorCont,
  EditCardContCal,
  EditCardContMark,
  EditCardContainer,
  EditCardDescription,
  EditCardHeader,
  EditCardInputColor,
  EditCardLabelText,
  EditCardOptionCont,
  EditCardSvgButtonText,
  EditCardSvgClose,
  EditCardSvgContainer,
  EditCardTextCal,
  EditCardTextCont,
  EditCardTitle,
  EditCardWrapper,
} from './EditCard.styled';
import { useState } from 'react';
import { editTask } from 'redux/tasks/operations';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { toastStyles } from '../../ToasterOptions';
import { useTranslation } from 'react-i18next';
import {
  BtnOpenCal,
  CalendarContainer,
  CustomCalendarContainer,
  DayText,
} from 'components/AddCard/AddCard.styled';

import { format } from 'date-fns';
import { DatePickerCalendar } from 'components/EditCard/DatePicker.styled';

export const EditCard = ({
  onCloseModal,
  task: { _id, title, description, priority, deadline, columnID },
}) => {
  const { t } = useTranslation('global');
  const [startDate, setStartDate] = useState(new Date(deadline));

  const dispatch = useDispatch();

  const getFormattedDate = date => {
    if (isToday(date)) {
      return `Today, ${format(date, 'MMMM d')}`;
    }

    return format(date, 'MMMM d, yyyy');
  };

  const isToday = date => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const formattedDate = getFormattedDate(startDate);

  const successToaster = () => {
    toast.success('You successfully edited card!', {
      icon: '👍',
      duration: 4000,
      style: toastStyles.success,
    });
  };

  return (
    <Formik
      initialValues={{
        title: `${title}`,
        description: `${description}`,
        priority: `${priority}`,
        deadline: `${deadline}`,
      }}
      onSubmit={values => {
        const editCard = {
          title: values.title,
          description: values.description,
          priority: values.priority,
          deadline: values.deadline,
          taskId: _id,
          columnID,
        };
        dispatch(editTask(editCard));

        onCloseModal();
        successToaster();
      }}
    >
      {({ values, setFieldValue }) => (
        <EditCardWrapper>
          <CLoseButton onClick={onCloseModal} type="button">
            <EditCardSvgClose>
              <use xlinkHref={`${sprite}#icon-x-close`}></use>
            </EditCardSvgClose>
          </CLoseButton>

          <EditCardContainer>
            <EditCardHeader>
              {t('screenPage.render.modal.card.editTitle')}
            </EditCardHeader>
            <EditCardTextCont>
              <EditCardTitle name="title" placeholder="Title" />

              <Field
                as={EditCardDescription}
                name="description"
                placeholder={t('screenPage.render.modal.card.descr')}
              />
            </EditCardTextCont>
            <EditCardOptionCont>
              <EditCardColorCont>
                <EditCardLabelText>
                  {t('screenPage.render.modal.card.color')}
                </EditCardLabelText>

                <label>
                  <EditCardContMark>
                    <EditCardInputColor
                      id="priorityLow"
                      type="radio"
                      name="priority"
                      value="Low"
                    />
                    <label
                      className="radio-label"
                      value="Low"
                      htmlFor="priorityLow"
                    ></label>
                    <EditCardInputColor
                      id="priorityMedium"
                      type="radio"
                      name="priority"
                      value="Medium"
                    />
                    <label
                      className="radio-label"
                      value="Medium"
                      htmlFor="priorityMedium"
                    ></label>
                    <EditCardInputColor
                      id="priorityHigh"
                      type="radio"
                      name="priority"
                      value="High"
                    />
                    <label
                      className="radio-label"
                      value="High"
                      htmlFor="priorityHigh"
                    ></label>
                    <EditCardInputColor
                      id="priorityWithout"
                      type="radio"
                      name="priority"
                      value="Without"
                    />
                    <label
                      className="radio-label"
                      value="Without"
                      htmlFor="priorityWithout"
                    ></label>
                  </EditCardContMark>
                </label>
              </EditCardColorCont>
              <EditCardContCal>
                <EditCardTextCal>
                  {t('screenPage.render.modal.card.deadline')}
                </EditCardTextCal>
                <CalendarContainer>
                  <BtnOpenCal type="button" className="sc-gHRYGD jSCLHb">
                    <DayText>{formattedDate}</DayText>
                  </BtnOpenCal>

                  <CustomCalendarContainer className="custom-calendar-container">
                    <DatePickerCalendar
                      selected={startDate}
                      minDate={new Date()}
                      onChange={date => {
                        setStartDate(date);
                        setFieldValue('deadline', date);
                      }}
                      dateFormat={
                        isToday(startDate) ? "'Today,' MMMM d" : 'EEEE,MMMM d'
                      }
                    />
                  </CustomCalendarContainer>
                </CalendarContainer>
              </EditCardContCal>
            </EditCardOptionCont>
          </EditCardContainer>
          <EditCardBtn type="submit">
            <EditCardSvgContainer>
              <EditCardButtonSvg>
                <use xlinkHref={`${sprite}#icon-plus`}></use>
              </EditCardButtonSvg>
            </EditCardSvgContainer>
            <EditCardSvgButtonText>
              {t('screenPage.render.modal.card.editBtn')}
            </EditCardSvgButtonText>
          </EditCardBtn>
        </EditCardWrapper>
      )}
    </Formik>
  );
};
