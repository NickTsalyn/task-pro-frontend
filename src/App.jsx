import WelcomePage  from 'Pages/WelcomePage';

import Auth from 'components/Auth/Auth';
import { Layout } from 'components/Layout/Layout';
import { PrivateRoute } from 'components/PrivateRoute';
import RegisterForm from 'components/Register/RegisterForm';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<WelcomePage />} />
        <Route path="/home" element={
            <PrivateRoute redirectTo="/auth/login" component={<HomePage />} />
          } >
          <Route path="/home/:boardName" />
        </Route>
      </Route>
      <Route path="auth/:id" element={<Auth />}>
        <Route path="register" element={<RegisterForm />} />
        <Route path="login" element={<>login</>} />
      </Route>
    </Routes>
  );
};
