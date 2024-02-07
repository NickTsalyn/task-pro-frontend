import { 
  // Outlet,
   useParams } from 'react-router-dom';
// import { Suspense } from 'react';
import RegisterForm from 'components/Register/RegisterForm';
import {
  AuthLinks,
  FormContainer,
  LinkWrapper,
  WelcomeWrapper,
} from './Auth.styled';
import { LogInForm } from 'components/LogInForm/LogInForm';

const Auth = () => {
  const { id } = useParams();

  return (
    <WelcomeWrapper>
      <FormContainer>
        <LinkWrapper>
          <AuthLinks to="/auth/register">Registration</AuthLinks>
          <AuthLinks to="/auth/login">Log In</AuthLinks>
        </LinkWrapper>

        {id === 'login' && <LogInForm />}
        {id === 'register' && <RegisterForm />}

        {/* <Suspense fallback={<>Login...</>}>
          <Outlet />
        </Suspense> */}
      </FormContainer>
    </WelcomeWrapper>
  );
};

export default Auth;
