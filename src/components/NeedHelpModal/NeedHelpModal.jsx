import Modal from 'react-modal';
import sprite from '../../images/icons.svg';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ModalWrapper, CloseButton, ModalTitle, Input, CommentInput, SendButton, StyledSvgClose } from './NeedHelpModal.styled';
import { sendHelpRequest } from '../../redux/auth/needHelpRequest.jsx'

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
  const dispatch = useDispatch();
  const needHelpData={
    email:email,
    message:comment
  };
  
  const handleSend = async () => {
    
    console.log("data",needHelpData)
    dispatch(sendHelpRequest(needHelpData))
      .then(() => {
        console.log('Request sent successfully');
        onClose(); 
      })
      .catch((error) => {
        console.error('Error sending request:', error);
      });
   
  }
   
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
                <Input type="email" name="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
                <ErrorMessage name="email" component="div" className="error-message" />
                <CommentInput type="text" name="comment" placeholder="Comment" value={comment} onChange={(e) => setComment(e.target.value)} />
                <ErrorMessage name="comment" component="div" className="error-message" />
              <SendButton type="submit" onClick={handleSend}>Send</SendButton>
            </Form>
          )}
        </Formik>
      </ModalWrapper>
    </Modal>
  );
};

