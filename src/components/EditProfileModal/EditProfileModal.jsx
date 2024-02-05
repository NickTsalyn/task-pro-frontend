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
  SvgPlusBox,
  TitleModal,
} from './EditProfileModal.styled.js';
import sprite from '../../images/icons.svg';
// import userAvatar from '../../img/Vector.png';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

const editFormSchema = Yup.object().shape({
  name: Yup.string().min(2, 'To short').max(15, 'To long'),
  email: Yup.string().email('Please enter a valid email').required('Required'),
  password: Yup.string()
    .min(5, 'Password is too short - should be 5 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
    .required('No password provided.'),
});

export const EditProfileModal = ({onCloseModal}) => {
  // const dispatch = useDispatch();
  // const handleSubmit = objCredentials => {
  //   return dispatch();
  // };

  const [showPassword, setShowPassword] = useState(false);

  const onShowPassword = () => {
    setShowPassword(!showPassword);
  };

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
            <ErrMessage component="span" name="email" />
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
