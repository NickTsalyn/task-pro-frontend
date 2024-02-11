import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useAuth } from 'hooks';
import { refreshUser } from 'redux/auth/operations';

import { PrivateRoute } from 'components/PrivateRoute';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { Layout } from 'components/Layout/Layout';
import { LogInForm } from 'components/LogInForm/LogInForm';
import RegisterForm from 'components/Register/RegisterForm';
import { Loader } from 'components/Loader/Loader';

// import HomePage from 'Pages/HomePage';
import { AddColumnButton } from '../src/components/Button/AddColumnButton'
import { EditColumnButton } from 'components/Button/EditColumnButton';
import { EditColumnModal } from 'components/ColumnModal/EditColumnModal/EditColumnModal';

const WelcomePage = lazy(() => import('./Pages/WelcomePage.jsx'));
const AuthPage = lazy(() => import('./Pages/AuthPage.jsx'));
// const HomePage = lazy(() => import('./Pages/HomePage.jsx'));
const ScreensPage = lazy(() => import('./Pages/ScreensPage'));

export const App = () => {return (
  // <AddColumnButton />
  <EditColumnButton />
);
 
 
  // const dispatch = useDispatch();
  // const { isRefreshing } = useAuth();
  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);

  // return isRefreshing ? (
  //   <Loader />
  // ) : (
  //   <Routes>
  //     <Route path="/" element={<Layout />}>
  //       <Route index element={<WelcomePage />} />
  //       <Route
  //         path="auth/:id"
  //         element={
  //           <RestrictedRoute redirectTo="/home" component={<AuthPage />} />
  //         }
  //       >
  //         <Route path="register" element={<RegisterForm />} />
  //         <Route path="login" element={<LogInForm />} />
  //       </Route>
  //     </Route>
  //     <Route
  //       path="/home"
  //       element={
  //         <PrivateRoute redirectTo="/auth/login" component={<HomePage />} />
  //       }
  //     >
  //       <Route path="/home" component={<HomePage />} />
  //       <Route path="/home/:boardName" element={<ScreensPage />} />
  //     </Route>
  //   </Routes>
  // );
};
