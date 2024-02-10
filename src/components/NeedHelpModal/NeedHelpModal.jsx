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

