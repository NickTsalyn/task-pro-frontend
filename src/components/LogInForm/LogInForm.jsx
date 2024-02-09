import React, { useState } from 'react';
import sprite from '../../images/icons.svg';
import {
  FormContainer,
  InputContainer,
  LogInBtn,
  MessageError,
  StyledInput,
  StyledInputContainer,
  StyledLabel,
  StyledLink,
  StyledSVG,
  StyledSVGButton,
} from './LogInForm.styled.jsx';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { login } from 'redux/auth/operations';
import { useTranslation } from 'react-i18next';

const LogInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email!').required('Email is required!'),
  password: Yup.string()
    .min(8, 'Password is too short!')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/,
      'The password must contain a minimum of 8 characters, at least one letter, one number, and one special character!'
    )
    .max(64, 'Password must be at most 64 characters')
    .required('Password is required!'),
});

const initialValues = {
  email: '',
  password: '',
};

export const LogInForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation('global');
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = e => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  const onSubmit = (values, { resetForm }) => {
    const { email, password } = values;
    dispatch(
      login({
        email,
        password,
      })
    );
    resetForm();
    navigate('/home');
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={LogInSchema}
      onSubmit={onSubmit}
    >
      <FormContainer>
        <InputContainer>
          <StyledLabel>
            <StyledInput
              type="text"
              id="email"
              name="email"
              autoComplete="off"
              placeholder={t('welcomePage.login.email')}
            />
            <MessageError name="email" component="div" />
          </StyledLabel>
          <StyledLabel>
            <StyledInputContainer>
              <StyledInput
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                placeholder={t('welcomePage.login.password')}
                autoComplete="off"
              />

              <StyledSVGButton type="button " onClick={handleTogglePassword}>
                <StyledSVG>
                  <use xlinkHref={`${sprite}#icon-eye`}></use>
                </StyledSVG>
              </StyledSVGButton>
            </StyledInputContainer>
            <MessageError name="password" component="div" />
          </StyledLabel>
        </InputContainer>
        <LogInBtn type="submit">{t('welcomePage.login.button')}</LogInBtn>
        <div>
          <StyledLink to="/auth/forgetPassword">
            Forgot your password?
          </StyledLink>
        </div>
      </FormContainer>
    </Formik>
  );
};
