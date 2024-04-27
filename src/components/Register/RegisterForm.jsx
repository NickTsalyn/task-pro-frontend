import * as Yup from 'yup';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { register } from 'redux/auth/operations';

import {
  FormContainer,
  InputContainer,
  MessageError,
  RegisterInBtn,
  StyledInput,
  StyledInputContainer,
  StyledLabel,
  StyledSVG,
  StyledSVGInv,
  StyledSVGButton,
} from './RegisterForm.styled.jsx';

import { useNavigate } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import { GoogleAuth } from 'components/GoogleBtn/GoogleAuth.jsx';

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required!')
    .min(2, 'Name must be at least 2 characters')
    .max(32, 'Name must be at most 32 characters'),
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
  name: '',
  email: '',
  password: '',
  showPassword: false,
};

const RegisterForm = () => {
  const { t } = useTranslation('global');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = e => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  const onSubmit = (values, { resetForm }) => {
    const { name, email, password } = values;
    dispatch(
      register({
        name,
        email,
        password,
      })
    );

    navigate('/home');
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RegisterSchema}
      onSubmit={onSubmit}
    >
      <FormContainer>
        <InputContainer>
          <StyledLabel>
            <StyledInput
              type="text"
              id="name"
              name="name"
              placeholder={t('welcomePage.registration.name')}
              autoComplete="off"
            />
            <MessageError name="name" component="div" />
          </StyledLabel>

          <StyledLabel>
            <StyledInput
              type="email"
              id="email"
              name="email"
              placeholder={t('welcomePage.registration.email')}
              autoComplete="off"
            />
            <MessageError name="email" component="div" />
          </StyledLabel>

          <StyledLabel>
            <StyledInputContainer>
              <StyledInput
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                placeholder={t('welcomePage.registration.password')}
                autoComplete="off"
              />

              <StyledSVGButton type="button " onClick={handleTogglePassword}>
                {showPassword ? <StyledSVGInv /> : <StyledSVG />}
              </StyledSVGButton>
            </StyledInputContainer>
            <MessageError name="password" component="div" />
          </StyledLabel>
        </InputContainer>
        <RegisterInBtn type="submit">
          {t('welcomePage.registration.button')}
        </RegisterInBtn>
        <GoogleAuth />
      </FormContainer>
    </Formik>
  );
};

export default RegisterForm;
