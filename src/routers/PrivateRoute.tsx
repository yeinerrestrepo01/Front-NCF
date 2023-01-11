import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useAuthentication } from 'global/hooks';

interface PrivateRouteProps {
  children: React.ReactNode | JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { user } = useAuthentication();

  return <>{!!user ? children : <Navigate replace to={'/'} />}</>;
};

PrivateRoute.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PrivateRoute;
