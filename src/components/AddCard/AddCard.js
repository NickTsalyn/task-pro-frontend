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
  // DatePickerCalendar,
  BtnOpenCal,
  CustomCalendarContainer
  
} from './AddCard.styled';
import { useState } from 'react';
import { CLoseButton } from 'components/EditProfileModal/EditProfileModal.styled';
import { addTask } from 'redux/tasks/operations';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { DatePickerNew } from 'components/DatePicker/DatePicker';
import { DatePickerCalendar } from 'components/DatePicker/DatePicker.styled';
;
// import DatePicker from 'react-date-picker';
// import { uk } from 'date-fns/locale';


export const AddCard = ({ onCloseModal, id }) => {
  const { t } = useTranslation('global');
    // const [fieldValue, setFieldValue] = useState(null);
    // const [selectedDate, setSelectedDate] = useState(new Date());
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);;
    const [startDate, setStartDate] = useState(new Date())

    // const handleDateChange = (date) => {
    //   setSelectedDate(date);
    // };
  
    const toOpenCalendar = () => {
      setIsCalendarOpen(!isCalendarOpen);
    };
  
  
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
    const today = new Date();

    if (isToday(date)) {
      return `Today, ${format(date, 'MMMM d')}`;
    }
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

  
  const formattedDate = getFormattedDate(startDate);

 
//  const toggleDatePicker = () => {
//   setIsDatePickerOpen((prevState) => !prevState);
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
            <BtnOpenCal
              type="button"
              className="sc-gHRYGD jSCLHb"
              // onClick={toOpenCalendar}
            >
              <DayText>{formattedDate}</DayText>
            </BtnOpenCal>
            {/* {isCalendarOpen && ( */}
              <CustomCalendarContainer className="custom-calendar-container">
                <DatePickerCalendar
                   selected={startDate}
                   onChange={(date) => {
                    setStartDate(date);
                    setIsCalendarOpen(false);
                    console.log(date)
                    //  setFieldValue('deadline', getFormattedDate(date));
                   }}
                   dateFormat={ isToday(startDate) ? "'Today,' MMMM d" : 'EEEE,MMMM d'}
                />
              </CustomCalendarContainer>
            {/* )} */}
          </CalendarContainer>
             {/* <CalendarContainer> */}
            {/* <BtnOpenCal
              type="button"
              className="sc-gHRYGD jSCLHb"
              onClick={toOpenCalendar}
            > */}
              {/* <DayText>{formattedDate}</DayText> */}
            {/* </BtnOpenCal> */}
            {/* {isCalendarOpen && ( */}
              {/* <CustomCalendarContainer className="custom-calendar-container">
              <DatePickerCalendar selected={startDate}
        onChange={(date) => {
          setStartDate(date)}}
        dateFormat={ isToday(startDate) ? "'Today,' MMMM d" : 'EEEE,MMMM d'}/>
       
              </CustomCalendarContainer> */}
            {/* )} */}
          {/* </CalendarContainer> */}


             
        
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
