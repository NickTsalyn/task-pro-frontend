import * as Yup from 'yup';
import { Field, Formik } from 'formik';
import {
  FormContainer,
  InputContainer,
  MessageError,
  StyledInput,
  SendMailBtn,
  StyledLabel,
  StyledInputContainer,
  StyledSVGButton,
  StyledSVG,
} from './PasswordRecovery.styled.jsx';
import { useState } from 'react';
import sprite from '../../images/icons.svg';
import { useDispatch } from 'react-redux';
import { changePassword } from 'redux/auth/operations.js';

import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const PasswordRecoverySchem = Yup.object().shape({
  tempraryPassword: Yup.string()
    .matches(/^.{24}$/, 'Recovery code must be exactly 12 characters long')
    .required('Recovery code is required!'),
  newPassword: Yup.string()
    .min(8, 'Password is too short!')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/,
      'The password must contain a minimum of 8 characters, at least one letter, one number, and one special character!'
    )
    .max(64, 'Password must be at most 64 characters')
    .required('Password is required!'),
  confirmNewPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
    .required('Confirm Password is required!'),
});

const initialValues = {
  tempraryPassword: '',
  newPassword: '',
  confirmNewPassword: '',
};

export const PasswordRecovery = () => {
  const {t} = useTranslation('global')
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = e => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  const navigate = useNavigate();
  const onSubmit = (values, { resetForm }) => {
    const { tempraryPassword, newPassword, confirmNewPassword } = values;

    dispatch(
      changePassword({ tempraryPassword, newPassword, confirmNewPassword })
    );
    resetForm();
    setTimeout(() => {
      navigate('/auth/login');
    }, 3000);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={PasswordRecoverySchem}
      onSubmit={onSubmit}
    >
      <FormContainer>
        <InputContainer>
          <StyledLabel>
            <StyledInputContainer>
              <StyledInput
                type="text"
                id="tempraryPassword"
                name="tempraryPassword"
                autoComplete="temprorary-password"
                placeholder={t('welcomePage.recovery.code')}
              />
            </StyledInputContainer>

            <MessageError name="tempraryPassword" component="div" />
          </StyledLabel>
        </InputContainer>
        <InputContainer>
          <StyledLabel>
            <StyledInputContainer>
              <StyledInput
                type={showPassword ? 'text' : 'password'}
                id="newPassword"
                name="newPassword"
                autoComplete="new-password"
                placeholder={t('welcomePage.recovery.new')}
              />
              <StyledSVGButton type="button " onClick={handleTogglePassword}>
                <StyledSVG>
                  <use xlinkHref={`${sprite}#icon-eye`}></use>
                </StyledSVG>
              </StyledSVGButton>
            </StyledInputContainer>

            <MessageError name="newPassword" component="div" />
          </StyledLabel>
        </InputContainer>
        <InputContainer>
          <StyledLabel>
            <StyledInputContainer>
              <Field
                id="confirmNewPassword"
                name="confirmNewPassword"
                placeholder={t('welcomePage.recovery.confirm')}
                render={({ field }) => (
                  <StyledInput
                    {...field}
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="new-password"
                    onPaste={e => e.preventDefault()}
                    placeholder={t('welcomePage.recovery.code')}
                  />
                )}
              />
              ;
              <StyledSVGButton type="button " onClick={handleTogglePassword}>
                <StyledSVG>
                  <use xlinkHref={`${sprite}#icon-eye`}></use>
                </StyledSVG>
              </StyledSVGButton>
            </StyledInputContainer>
            <MessageError name="confirmNewPassword" component="div" />;
          </StyledLabel>
        </InputContainer>

        <SendMailBtn type="submit">{t('welcomePage.recovery.change')}</SendMailBtn>
      </FormContainer>
    </Formik>
  );
};
