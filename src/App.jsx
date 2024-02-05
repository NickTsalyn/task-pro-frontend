import { Route, Routes } from 'react-router-dom';

import HomePage from 'Pages/HomePage';
// import { ScreensPage } from 'Pages/ScreensPage';
import WelcomePage from 'Pages/WelcomePage';

import Auth from 'components/Auth/Auth';
import { Layout } from 'components/Layout/Layout';
import { LogInForm } from 'components/LogInForm/LogInForm';
import { PrivateRoute } from 'components/PrivateRoute';
import RegisterForm from 'components/Register/RegisterForm';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';
import { RestrictedRoute } from 'RestrictedRoute';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<WelcomePage />} />
        <Route path="auth/:id" element={<Auth />}>
          <Route
            path="register"
            element={
              <RestrictedRoute
                redirectTo="/home"
                component={<RegisterForm />}
              />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute redirectTo="/home" component={<LogInForm />} />
            }
          />
        </Route>
      </Route>
      {/* <Route
        path="/home"
        element={
          <PrivateRoute redirectTo="/auth/login" component={<HomePage />} />
        }
      >
        <Route path="/home/:boardName" element={<ScreensPage />} />
      </Route> */}
      <Route
        path="/home"
        element={
          <PrivateRoute redirectTo="/auth/login" component={<HomePage />} />
        }
      />
    </Routes>
  );
};
