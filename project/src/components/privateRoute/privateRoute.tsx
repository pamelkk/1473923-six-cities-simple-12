import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const/const';
import { UseAppSelector } from '../../hooks';

type PrivateRouteProps = {
  children: JSX.Element;
};

const PrivateRoute = (props: PrivateRouteProps): JSX.Element => {
  const { children } = props;
  const authorizationStatus = UseAppSelector((state) => state.authorizationStatus);

  return (
    authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.login} />
  );
};

export default PrivateRoute;
