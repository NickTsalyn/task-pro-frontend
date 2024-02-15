import { Field, Formik } from 'formik';
// import 'react-datepicker/dist/react-datepicker.css';
import sprite from '../../images/icons.svg';
import { CLoseButton } from '../../components/EditProfileModal/EditProfileModal.styled';

import {
  EditCardBtn,
  EditCardButtonSvg,
  EditCardColorCont,
  EditCardContCal,
  EditCardContMark,
  EditCardContainer,
  // EditCardDate,
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
import {  editTask } from 'redux/tasks/operations';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { toastStyles } from '../../ToasterOptions';
import { useTranslation } from 'react-i18next';
import { BtnOpenCal, CalendarContainer, CustomCalendarContainer, DayText } from 'components/AddCard/AddCard.styled';
import { DatePickerNew } from 'components/DatePicker/DatePicker';
import { format } from 'date-fns';



export const EditCard = ({ onCloseModal,task: {  _id, title, description, priority,deadline } }) => {
  const {t} = useTranslation('global')
  const [startDate] = useState(new Date());
  const [isCalendarOpen, setCalendarOpen] = useState(true);
  const [selectedDate, setSelectedDate] = useState(null);
  const dispatch = useDispatch();

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // setIsOpen(false);
  };

  const getFormattedDate = (date) => {
    //  const today = new Date();
   
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
              <EditCardTextCal>
                {t('screenPage.render.modal.card.deadline')}
              </EditCardTextCal>
              <CalendarContainer>
                    <BtnOpenCal
                    type="button"
                    className="sc-gHRYGD jSCLHb"
                     onClick={() => setCalendarOpen(!isCalendarOpen)}
                    >
                      <DayText>{formattedDate}</DayText>
                    {/* <svg>
                        <use xlinkHref="/task-pro-frontend/static/media/icons.aac6f44bcaee16261ed30d1da75e7958.svg#icon-chevron-down1"></use>
                      </svg> */}
                  </BtnOpenCal>
                  {isCalendarOpen && (
                   <CustomCalendarContainer className="custom-calendar-container">
                      <DatePickerNew
                         selected={selectedDate}
                         onChange={handleDateChange}
                         dateFormat={
                          isToday(startDate) ? "'Today,' MMMM d" : 'EEEE,MMMM d'
                        }
                     />
                   </CustomCalendarContainer>)}
               </CalendarContainer>
              {/* <EditCardDate
                name="deadline"
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
    </Formik>
  );
              }