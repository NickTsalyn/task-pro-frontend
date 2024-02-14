import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  FormContainer,
  InputContainer,
  MessageError,
  StyledInput,
  SendMailBtn,
  StyledLabel,
} from './ForgetPassword.styled.jsx';
import { useDispatch } from 'react-redux';
import { forgetPassword } from 'redux/auth/operations';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ForgetPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email!').required('Email is required!'),
});

const initialValues = {
  email: '',
};

export const ForgetPassword = () => {
  const {t} = useTranslation('global')
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (values, { resetForm }) => {
    const { email } = values;

    dispatch(forgetPassword({ email }))
      .then(resp => {
        if (resp.payload === 'User not found') {
          toast.error('User not found. Please check your email.');
        } else {
          toast.success(`Temporary password sent to ${email} successfully!`);
        }
      })
      .catch(error => {
        console.log(error);
        toast.error('An error occurred. Please try again.');
      });
    setTimeout(() => {
      navigate('/auth/changePassword');
    }, 3000);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ForgetPasswordSchema}
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
              placeholder={t('welcomePage.forgot.email')}
            />
            <MessageError name="email" component="div" />
          </StyledLabel>
        </InputContainer>
        <SendMailBtn type="submit">{t('welcomePage.forgot.send')}</SendMailBtn>
      </FormContainer>
    </Formik>
  );
};
