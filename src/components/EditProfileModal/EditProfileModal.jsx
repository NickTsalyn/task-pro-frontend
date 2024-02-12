import React, { useState } from 'react';
import {
  AddButton,
  Button,
  CLoseButton,
  ErrMessage,
  HideBtn,
  IconClose,
  IconEye,
  IconPlus,
  IconUser,
  // ImageUser,
  ModalWrap,
  ProfileFotoBox,
  StyledField,
  StyledForm,
  StyledLabel,
  TitleModal,
} from './EditProfileModal.styled.js';
import sprite from '../../images/icons.svg';
import { Formik } from 'formik';
import * as Yup from 'yup';

const editFormSchema = Yup.object().shape({
  name: Yup.string().min(3, 'To short').max(30, 'To long'),
  email: Yup.string().email('Please enter a valid email address'),

  password: Yup.string()
    .min(5, 'The password should be at least 5 characters long')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});

export const EditProfileModal = ({ onCloseModal }) => {
  // const dispatch = useDispatch();
  // const handleSubmit = objCredentials => {
  //   return dispatch();
  // };

  const [showPassword, setShowPassword] = useState(false);

  const onShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // const Upload = () => (
  //   <label>
  //     <input type="file" />
  //   </label>
  // );

  return (
    <ModalWrap>
      <TitleModal>Edit profile</TitleModal>

      <CLoseButton onClick={onCloseModal}>
        <IconClose>
          <use xlinkHref={`${sprite}#icon-x-close`}></use>
        </IconClose>
      </CLoseButton>
      <ProfileFotoBox>
        <IconUser>
          <use xlinkHref={`${sprite}#icon-user`}></use>
        </IconUser>
        {/* зробити рендер за умовою */}
        {/* <ImageUser src={userAvatar} alt="user-avatar" /> */}
        <AddButton>
          <IconPlus>
            <use xlinkHref={`${sprite}#icon-plus`}></use>
          </IconPlus>
        </AddButton>
      </ProfileFotoBox>

      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={editFormSchema}
        // onSubmit={(values, actions) => {
        //   handleSubmit(values);
        //   actions.resetForm();
        // }}
      >
        <StyledForm>
          <StyledLabel htmlFor="email">
            <StyledField
              type="text"
              name="name"
              placeholder="Enter username"
            ></StyledField>
            <ErrMessage component="span" name="name" />
          </StyledLabel>

          <StyledLabel htmlFor="email">
            <StyledField
              type="email"
              name="email"
              placeholder="Enter email"
            ></StyledField>
            <ErrMessage component="span" name="email" />
          </StyledLabel>

          <StyledLabel htmlFor="password">
            <StyledField
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Enter password"
            ></StyledField>
            <ErrMessage component="span" name="password" />
            <HideBtn type="button " onClick={onShowPassword}>
              <IconEye>
                <use xlinkHref={`${sprite}#icon-eye`}></use>
              </IconEye>
            </HideBtn>
          </StyledLabel>

          <Button type="submit">Send</Button>
        </StyledForm>
      </Formik>
    </ModalWrap>
  );
};
