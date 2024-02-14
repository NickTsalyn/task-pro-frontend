import { Field, Formik } from 'formik';
// import 'react-datepicker/dist/react-datepicker.css';
import sprite from '../../images/icons.svg';
import toast from 'react-hot-toast';
import { toastStyles } from '../../ToasterOptions';

import {
  AddCardBtn,
  AddCardButtonSvg,
  AddCardColorCont,
  AddCardContCal,
  AddCardContMark,
  AddCardContainer,
  AddCardDate,
  // AddCardDesc,
  AddCardDescription,
  AddCardHeader,
  AddCardLabelColor,
  AddCardLabelText,
  AddCardOptionCont,
  AddCardSvgButtonText,
  AddCardSvgClose,
  AddCardSvgContainer,
  AddCardTextCal,
  AddCardTextCont,
  AddCardTitle,
  AddCardWrapper,
  DatePickerCalendar,
} from './AddCard.styled';
import { useState } from 'react';
import { CLoseButton } from 'components/EditProfileModal/EditProfileModal.styled';
import { addTask } from 'redux/tasks/operations';
import { useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import { useTranslation } from 'react-i18next';

export const AddCard = ({ onCloseModal, id }) => {
  const { t } = useTranslation('global');
  const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();
  // const formik = useFormik({
  //   initialValues: {
  //     title: '',
  //     description: '',
  //     priority: '',
  //     deadline: '',
  //   },

  // });

  //   const saveCard = ()=>{

  //     const newCard = {
  //       title: formik.values.title,
  //       description: formik.values.description,
  //       priority: formik.values.priority,
  //       deadline: formik.values.deadline,
  //     };
  // dispatch(addTask(newCard));

  //   }

  const isToday = date => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const successToaster = () => {
    toast.success('You successfully added card!', {
      icon: '👍',
      duration: 4000,
      style: toastStyles.success,
    });
  };

  return (
    <Formik
      initialValues={{
        title: '',
        description: '',
        priority: '' ?? 'Without',
        deadline: `${startDate}`,
      }}
      onSubmit={(values, { resetForm }) => {
        const newCard = {
          title: values.title,
          description: values.description,
          priority: values.priority,
          deadline: values.deadline,
          columnId: id,
        };
        console.log('hi');
        console.log(newCard);
        dispatch(addTask(newCard));
        console.log('hi');
        resetForm();
        onCloseModal();
        successToaster();
      }}
    >
      <AddCardWrapper>
        <CLoseButton onClick={onCloseModal} type="button">
          <AddCardSvgClose>
            <use xlinkHref={`${sprite}#icon-x-close`}></use>
          </AddCardSvgClose>
        </CLoseButton>
        <AddCardContainer>
          <AddCardHeader>
            {t('screenPage.render.modal.card.title')}
          </AddCardHeader>
          <AddCardTextCont>
            <AddCardTitle
              name="title"
              placeholder={t('screenPage.render.modal.card.cardTitle')}
            />
            {/* <Field className='AddCardDesc' as='textarea'name="description"></Field> */}
            <Field
              as={AddCardDescription}
              name="description"
              placeholder={t('screenPage.render.modal.card.descr')}
              // value={Formik.values.description}
              // onChange={(e) => {
              //   AddCardDescription.value = e.target.value;
              //   console.dir(AddCardDescription.value);
              // }}
              // onBlur={Formik.handleBlur}
            />
          </AddCardTextCont>
          <AddCardOptionCont>
            <AddCardColorCont>
              <AddCardLabelText>
                {t('screenPage.render.modal.card.color')}
              </AddCardLabelText>

              <label>
                <AddCardContMark>
                  <AddCardLabelColor type="radio" name="priority" value="Low" />
                  <AddCardLabelColor
                    type="radio"
                    name="priority"
                    value="Medium"
                  />
                  <AddCardLabelColor
                    type="radio"
                    name="priority"
                    value="High"
                  />
                  <AddCardLabelColor
                    type="radio"
                    name="priority"
                    value="Without"
                  />
                </AddCardContMark>
              </label>
            </AddCardColorCont>
            <AddCardContCal>
              <AddCardTextCal>
                {t('screenPage.render.modal.card.deadline')}
              </AddCardTextCal>
              <DatePickerCalendar
                name="deadline"
                selected={startDate}
                onChange={date => setStartDate(date)}
                dateFormat={
                  isToday(startDate) ? "'Today,' MMMM d" : 'EEEE,MMMM d'
                }
                // showWeekNumbers
              />
              {/* <DatePicker

        /> */}
              {/* </DatePickerCalendar> */}
              {/* <AddCardDate
              name='deadline'
                selected={startDate}
                onChange={date => setStartDate(date)}
                dateFormat={
                  isToday(startDate) ? "'Today,' MMMM d" : 'EEEE,MMMM d'
                }
                showWeekNumbers
              /> */}
            </AddCardContCal>
          </AddCardOptionCont>
        </AddCardContainer>
        <AddCardBtn type="submit">
          <AddCardSvgContainer>
            <AddCardButtonSvg>
              <use xlinkHref={`${sprite}#icon-plus`}></use>
            </AddCardButtonSvg>
          </AddCardSvgContainer>
          <AddCardSvgButtonText>
            {t('screenPage.render.addCard')}
          </AddCardSvgButtonText>
        </AddCardBtn>
      </AddCardWrapper>
    </Formik>
  );
};
