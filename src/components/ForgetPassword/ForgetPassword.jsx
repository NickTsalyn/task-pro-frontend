// import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  FormContainer,
  InputContainer,
  MessageError,
  StyledInput,
  SendMailBtn,
  StyledLabel,
} from './ForgetPassword.styled';

const ForgetPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email!').required('Email is required!'),
});

const initialValues = {
  email: '',
};

export const ForgetPassword = ({ setForgetPassword }) => {
  //   const navigate = useNavigate();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ForgetPasswordSchema}
      //   onSubmit={}
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
