import {
  // Outlet,
  useParams,
} from 'react-router-dom';
// import { Suspense } from 'react';
import RegisterForm from 'components/Register/RegisterForm';
import {
  AuthLinks,
  FormContainer,
  LinkWrapper,
  WelcomeWrapper,
} from './Auth.styled';
import { LogInForm } from 'components/LogInForm/LogInForm';
import { useTranslation } from 'react-i18next';

import { ForgetPassword } from 'components/ForgetPassword/ForgetPassword';

const Auth = () => {
  const { id } = useParams();
  const { t } = useTranslation('global');

  return (
    <WelcomeWrapper>
      <FormContainer>
        <LinkWrapper>
          <AuthLinks to="/auth/register">
            {t('welcomePage.welcome.registration')}
          </AuthLinks>
          <AuthLinks to="/auth/login">
            {t('welcomePage.welcome.login')}
          </AuthLinks>
        </LinkWrapper>

        {id === 'login' && <LogInForm />}
        {id === 'register' && <RegisterForm />}
        {id === 'forgetPassword' && <ForgetPassword />}

        {/* <Suspense fallback={<>Login...</>}>
          <Outlet />
        </Suspense> */}
      </FormContainer>
    </WelcomeWrapper>
  );
};

export default Auth;
