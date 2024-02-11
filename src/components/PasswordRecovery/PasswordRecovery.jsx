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

// import toast from 'react-hot-toast';

const PasswordRecoverySchem = Yup.object().shape({
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
  newPassword: '',
  confirmNewPassword: '',
};

export const PasswordRecovery = () => {
  //   const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = e => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const onSubmit = (values, { resetForm }) => {
    // const { email } = values;
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
                type={showPassword ? 'text' : 'password'}
                id="newPassword"
                name="newPassword"
                autoComplete="new-password"
                placeholder="New Password"
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
                placeholder="Confirm New Password"
                render={({ field }) => (
                  <StyledInput
                    {...field}
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="new-password"
                    onPaste={e => e.preventDefault()}
                    placeholder="Confirm New Password"
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

        <SendMailBtn type="submit">Change password</SendMailBtn>
      </FormContainer>
    </Formik>
  );
};
