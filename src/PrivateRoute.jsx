import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks';

export const PrivateRoute = ({
  component: Component,
  redirectTo = '/home',
}) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  const isReadyToRedirect = !isRefreshing && shouldRedirect;

  return isReadyToRedirect ? <Navigate to={redirectTo} /> : Component;
};
