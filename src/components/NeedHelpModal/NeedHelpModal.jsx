import React, { useState } from 'react';
import { ModalWrapper, CloseButton, InputWrapper, ModalTitle, Input, CommentInput, SendButton } from './NeedHelpModal.styled';

export const NeedHelpModal = ({ onOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  const handleSend = () => {
    console.log('Email:', email);
    console.log('Comment:', comment);
    // Додайте код для обробки введених даних або надішліть їх далі
    onClose();
  };

  return (
    <ModalWrapper>
      <CloseButton onClick={onClose}>X</CloseButton>
      <ModalTitle>Need help</ModalTitle>
      <InputWrapper>
        <Input type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
      </InputWrapper>
      <InputWrapper>
        <CommentInput placeholder="Comment" value={comment} onChange={(e) => setComment(e.target.value)} />
      </InputWrapper>
      <SendButton onClick={handleSend}>Send</SendButton>
    </ModalWrapper>
  );
};
// export default NeedHelpModal;