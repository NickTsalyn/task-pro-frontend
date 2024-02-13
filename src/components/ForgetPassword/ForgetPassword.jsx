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

const ForgetPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email!').required('Email is required!'),
});

const initialValues = {
  email: '',
};

export const ForgetPassword = () => {
  const dispatch = useDispatch();

  const onSubmit = (values, { resetForm }) => {
    const { email } = values;

    dispatch(forgetPassword({ email }))
      .then(resp => {
        console.log(resp);
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
              placeholder="Input your Email"
            />
            <MessageError name="email" component="div" />
          </StyledLabel>
        </InputContainer>
        <SendMailBtn type="submit">Send Email</SendMailBtn>
      </FormContainer>
    </Formik>
  );
};
