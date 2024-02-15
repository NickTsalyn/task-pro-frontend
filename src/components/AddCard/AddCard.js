import { Field, Formik } from 'formik';
import sprite from '../../images/icons.svg';
import toast from 'react-hot-toast';
import { toastStyles } from '../../ToasterOptions';
import { format } from 'date-fns';
// import DatePicker from 'react-date-picker';
// import { DatePicker } from 'rsuite';


import {
  AddCardBtn,
  AddCardButtonSvg,
  AddCardColorCont,
  AddCardContCal,
  AddCardContMark,
  AddCardContainer,
  // AddCardDate,
  // AddCardDesc,
  AddCardDescription,
  AddCardHeader,
  AddCardInputColor,
  AddCardLabelText,
  AddCardOptionCont,
  AddCardSvgButtonText,
  AddCardSvgClose,
  AddCardSvgContainer,
  AddCardTextCal,
  AddCardTextCont,
  AddCardTitle,
  AddCardWrapper,
  CalendarContainer,

  DayText,
  DatePickerCalendar,
  BtnOpenCal
  
} from './AddCard.styled';
import { useState } from 'react';
import { CLoseButton } from 'components/EditProfileModal/EditProfileModal.styled';
import { addTask } from 'redux/tasks/operations';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
// import DatePicker from 'react-date-picker';
// import { uk } from 'date-fns/locale';


export const AddCard = ({ onCloseModal, id }) => {
  const { t } = useTranslation('global');
   const [startDate, setStartDate] = useState(new Date());
   const [selectedDate, setselectedDate] = useState(null);
   const [isCalendarOpen, setIsCalendarOpen] = useState(true);
   const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
 
 
   const dispatch = useDispatch();
   // const formik = useFormik({
   //   initialValues: {
   //     title: '',
   //     description: '',
   //     priority: '',
   //     deadline: '',
   //   },
    
   // });
 
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
 
 const toOpenCalendar = () => {
   setIsCalendarOpen(!isCalendarOpen);


 };

 const toggleDatePicker = () => {
  setIsDatePickerOpen((prevState) => !prevState);
};
 
const CustomDatePickerButton = ({ value, onClick }) => (
  <BtnOpenCal onClick={onClick}>
    {value || 'Select Date'}
  </BtnOpenCal>)

  // const [startDate, setStartDate] = useState(new Date());
  // const dispatch = useDispatch();
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
        priority: '' || 'Without',
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
     
        console.log(newCard);
        dispatch(addTask(newCard));
       
        resetForm();
        onCloseModal();
        successToaster();
      }}
    >
       {({ values, setFieldValue }) => (
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

              <AddCardContMark>
              <AddCardInputColor
                    id="priorityLow"
                    type="radio"
                    name="priority"
                    value="Low"
                  />
                <label className='radio-label' value="Low" htmlFor="priorityLow">
                 
                </label>
                <AddCardInputColor
                    id="priorityMedium"
                    type="radio"
                    name="priority"
                    value="Medium"
                  />
                <label className='radio-label' value="Medium" htmlFor="priorityMedium">
                
                </label>
                <AddCardInputColor
                    id="priorityHigh"
                    type="radio"
                    name="priority"
                    value="High"
                  />
                <label className='radio-label' value="High" htmlFor="priorityHigh">
                  
                </label>
                <AddCardInputColor
                    id="priorityWithout"
                    type="radio"
                    name="priority"
                    value="Without"
                  />
                <label className='radio-label' value="Without" htmlFor="priorityWithout">
                 
                </label>
              </AddCardContMark>
            </AddCardColorCont>
            <AddCardContCal>
              <AddCardTextCal>
                {t('screenPage.render.modal.card.deadline')}
              </AddCardTextCal>
              <CalendarContainer>
                  <DayText>{formattedDate}</DayText>


                      <BtnOpenCal type="button" onClick={toggleDatePicker}>
                        <svg>
                          <use xlinkHref={`${sprite}#icon-chevron-down1`}></use>
                        </svg>
                      </BtnOpenCal>

                      {isDatePickerOpen && (
        <DatePickerCalendar
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      customInput={<CustomDatePickerButton />}
      
      // onChange={(date) => {
      //   // isCalendarOpen={isCalendarOpen}

      //   setStartDate(date);
      //   // setselectedDate(date);
      //   setFieldValue('deadline', date);
      // }}
      format="EEEE, MMMM d"
    />
                      )}
                  {/* <DatePickerCalendar
                    isCalendarOpen={isCalendarOpen}
                    selected={selectedDate}
                    onChange={(date) => {
                      setStartDate(date);
                      setselectedDate(date);
                      setFieldValue('deadline', date);
                    }}
                    format="EEEE, MMMM d"
                  /> */}
</CalendarContainer>
        
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
       )}
    </Formik>
  );
};
