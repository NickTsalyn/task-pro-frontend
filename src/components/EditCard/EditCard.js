import { Field, Formik } from 'formik';
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
  // AddCardDesc,
  EditCardDescription,
  EditCardHeader,
  EditCardLabelColor,
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

export const EditCard = ({ onCloseModal,task: {  _id, title, description, priority,deadline } }) => {
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

  return (
    <Formik
      initialValues={{
        title: `${title}`,
        description: `${description}`,
        priority: `${priority}`,
        deadline: `${deadline} ?? ${startDate}`,
      }}
      onSubmit={(values, { resetForm }) => {
        const newCard = {
          title: values.title,
          description: values.description,
          priority: values.priority,
          deadline: values.deadline,
          columnId: _id
         
        };
        console.log(newCard);
        dispatch(editTask(newCard));
        // resetForm();
        
        onCloseModal()

      }}
    >
      <EditCardWrapper>
        {/* <CLoseButton onClick = {onCloseModal}>
          <EditCardSvgClose>
          <use xlinkHref={`${sprite}#icon-x-close`}></use>
          </EditCardSvgClose>
          </CLoseButton> */}
        <EditCardContainer>
          <EditCardHeader>Edit Card</EditCardHeader>
          <EditCardTextCont>
            <EditCardTitle name="title" placeholder="Title" />
            {/* <Field className='AddCardDesc' as='textarea'name="description"></Field> */}
            <Field
            as={EditCardDescription}
              name="description"
           
              placeholder="Description"
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
              <EditCardLabelText>Label color</EditCardLabelText>

              <label>
                <EditCardContMark>
                  <EditCardLabelColor type="radio" name="priority" value="Low" />
                  <EditCardLabelColor type="radio" name="priority" value="Medium" />
                  <EditCardLabelColor type="radio" name="priority" value="High" />
                  <EditCardLabelColor type="radio" name="priority" value="Without" />
                </EditCardContMark>
              </label>
            </EditCardColorCont>
            <EditCardContCal>
              <EditCardTextCal>DeadLine</EditCardTextCal>
              <EditCardDate
              name='deadline'
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
          <EditCardSvgButtonText>Edit</EditCardSvgButtonText>
        </EditCardBtn>
      </EditCardWrapper>
    </Formik>
  );
              }