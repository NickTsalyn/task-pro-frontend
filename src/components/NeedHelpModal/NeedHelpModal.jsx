/*import Modal from 'react-modal';
import sprite from '../../images/icons.svg';
import axios from 'axios';
import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { ModalWrapper, CloseButton, InputWrapper, ModalTitle, Input, CommentInput, SendButton, StyledSvgClose } from './NeedHelpModal.styled';
*/
import Modal from 'react-modal';
import sprite from '../../images/icons.svg';
import axios from 'axios';
import React, { useState } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ModalWrapper, CloseButton, InputWrapper, ModalTitle, Input, CommentInput, SendButton, StyledSvgClose } from './NeedHelpModal.styled';

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Please enter a valid email address')
    .required(''),
  comment: Yup.string()
    .required('')
});

 export const NeedHelpModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  const handleSend = async () => {
    try {
      await axios.post('https://task-pro-backend-a1c2.onrender.com/api/users/needHelp----', {
        email,
        message: comment
      });
      // Дані відправлено успішно
      onClose();
    } catch (error) {
      // Обробка помилки
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      overlayClassName="modal-overlay"
      className="modal-content"
      onRequestClose={onClose}
      ariaHideApp={false}
    >
      <ModalWrapper>
        <CloseButton onClick={onClose}>
          <StyledSvgClose>
            <use xlinkHref={`${sprite}#icon-x-close`}></use>
          </StyledSvgClose>
        </CloseButton>
        <ModalTitle>Need help</ModalTitle>
        <Formik
          initialValues={{ email: '', comment: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSend}
        >
          {({ isSubmitting }) => (
            <Form>
              <InputWrapper>
                <Input type="email" name="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
                <ErrorMessage name="email" component="div" className="error-message" />
              </InputWrapper>
              <InputWrapper>
                <CommentInput type="text" name="comment" placeholder="Comment" value={comment} onChange={(e) => setComment(e.target.value)} />
                <ErrorMessage name="comment" component="div" className="error-message" />
              </InputWrapper>
              <SendButton type="submit" disabled={isSubmitting}>Send</SendButton>
            </Form>
          )}
        </Formik>
      </ModalWrapper>
    </Modal>
  );
};

// export default NeedHelpModal;
/*
const validationSchema = Yup.object({
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('required field'),
});

export const NeedHelpModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  const handleSend = () => {
    
    const handleSend = async () => {

      try {
        await axios.post('https://task-pro-backend-a1c2.onrender.com/api/users/needHelp----', {
          email,
          message: comment
        });
    
        // Дані відправлено успішно
    
      } catch (error) {
        // Обробка помилки
      }
    
    }
    
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      overlayClassName="modal-overlay"
      className="modal-content"
      onRequestClose={() => onClose()}
      ariaHideApp={false}
    >
    <ModalWrapper>
      <CloseButton onClick={onClose}>
        <StyledSvgClose>
        <use xlinkHref={`${sprite}#icon-x-close`}></use>
          </StyledSvgClose>
      </CloseButton>
      <ModalTitle>Need help</ModalTitle>
      <InputWrapper>
        <Input type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
      </InputWrapper>
      <InputWrapper>
        <CommentInput placeholder="Comment" value={comment} onChange={(e) => setComment(e.target.value)} />
      </InputWrapper>
      <SendButton onClick={handleSend}>Send</SendButton>
    </ModalWrapper>
     </Modal>
  );
};
// export default NeedHelpModal;*/
/*
Винести логіку відправки даних в окрему функцію sendData(), щоб відокремити її від обробника події handleSend.
Додати обробку помилок та індикацію статусу для користувача - налаштувати лоадер під час відправки, показати повідомлення про успіх/помилку.
Валідувати дані перед відправкою на сервер - перевірити заповнення обов'язкових полів, формат email.
Зберігати дані форми в локальному стейті, щоб не втрачати їх при помилці та для можливості редагування.
Винести роботу з API в окремий сервіс/хук для кращого розділення логіки.
Додати можливість очищення форми після успішної відправки даних.
Покращити UX - анімація модального вікна, фокус на поля введення, перевірка на пусті поля при спробі відправки.
*/