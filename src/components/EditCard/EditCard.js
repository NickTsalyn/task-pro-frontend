import { Field, Formik } from 'formik';
import sprite from '../../images/icons.svg';
// import DatePicker from 'react-date-picker';
import { format } from 'date-fns';



import { CLoseButton } from '../../components/EditProfileModal/EditProfileModal.styled';

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
import { useState} from 'react';
import { CLoseButton } from 'components/EditProfileModal/EditProfileModal.styled';
import {  editTask } from 'redux/tasks/operations';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { toastStyles } from '../../ToasterOptions';
import { useTranslation } from 'react-i18next';
import { CalendarContainer, DatePickerCalendar, DayText, BtnOpenCal } from 'components/AddCard/AddCard.styled';

export const EditCard = ({ onCloseModal,task: {  _id, title, description, priority,deadline } }) => {
  const {t} = useTranslation('global')
  const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();
  const [selectedDate, setselectedDate] = useState(null);
   const [isCalendarOpen, setIsCalendarOpen] = useState(false);


   const getFormattedDate = (date) => {
    // const today = new Date();
  
    if (isToday(date)) {
      // Якщо дата - сьогодні
      return `Today, ${format(date, 'MMMM d')}`;
    }
  
    // Якщо дата не сьогодні
    return format(date, 'MMMM d, yyyy');
  };
  
  const isToday = (date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };
  const currentDate = new Date();
const formattedDate = getFormattedDate(currentDate);

const toOpenCalendar = () => {
  setIsCalendarOpen(!isCalendarOpen);
};
  
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

  // const isToday = date => {
  //   const today = new Date();
  //   return (
  //     date.getDate() === today.getDate() &&
  //     date.getMonth() === today.getMonth() &&
  //     date.getFullYear() === today.getFullYear()
  //   );
  // };

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
        deadline: `${deadline} ?? ${startDate}`,
      }}
      onSubmit={values => {
        const editCard = {
          title: values.title,
          description: values.description,
          priority: values.priority,
          deadline: values.deadline,
          taskId: _id,
        };
        console.log(editCard);
        dispatch(editTask(editCard));

        // resetForm();

        onCloseModal();
        successToaster();
      }}
    >
      {({ values, setFieldValue }) => (
      <EditCardWrapper>
        <CLoseButton type="button" onClick = {onCloseModal}>
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

            {/* <Field className='AddCardDesc' as='textarea'name="description"></Field> */}
            <Field
              as={EditCardDescription}
              name="description"
              placeholder={t('screenPage.render.modal.card.descr')}
              // value={Formik.values.description}
              // onChange={(e) => {
              //   AddCardDescription.value = e.target.value;
              //   console.dir(AddCardDescription.value);
              // }}
              // onBlur={Formik.handleBlur}
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
                <label className='radio-label' value="Low" htmlFor="priorityLow">
                 
                </label>
                <EditCardInputColor
                    id="priorityMedium"
                    type="radio"
                    name="priority"
                    value="Medium"
                  />
                <label className='radio-label' value="Medium" htmlFor="priorityMedium">
                
                </label>
                <EditCardInputColor
                    id="priorityHigh"
                    type="radio"
                    name="priority"
                    value="High"
                  />
                <label className='radio-label' value="High" htmlFor="priorityHigh">
                  
                </label>
                <EditCardInputColor
                    id="priorityWithout"
                    type="radio"
                    name="priority"
                    value="Without"
                  />
                <label className='radio-label' value="Without" htmlFor="priorityWithout">
                 
                </label>
                </EditCardContMark>
              </label>
            </EditCardColorCont>
            <EditCardContCal>
              <EditCardTextCal>{t('screenPage.render.modal.card.deadline')}</EditCardTextCal>
              <CalendarContainer> 
                  <DayText>{formattedDate}</DayText>
                  <BtnOpenCal type="button" onClick={toOpenCalendar}>
                    <svg>
                      <use xlinkHref= {`${sprite}#icon-chevron-down1`}></use>
                    </svg>
                  </BtnOpenCal>
                <DatePickerCalendar
                 selected={selectedDate}
                 onChange={(date) => {
                  setStartDate(date);
                 setselectedDate(date);
                 setFieldValue('deadline', date);
                 }}
                  format="EEEE, MMMM d"
                  formatDay={(date) => format(date, 'd')}
                  isCalendarOpen={isCalendarOpen}

               />
              </CalendarContainer>
              {/* <EditCardDate
              name='deadline'
                selected={startDate}
                onChange={date => setStartDate(date)}
                dateFormat={
                  isToday(startDate) ? "'Today,' MMMM d" : 'EEEE,MMMM d'
                }
                showWeekNumbers
              /> */}
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
              }