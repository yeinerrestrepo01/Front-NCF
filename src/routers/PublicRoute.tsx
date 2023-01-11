import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useAuthentication } from 'global/hooks';

interface PublicRouteProps {
  children: React.ReactNode;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const { user } = useAuthentication();
  const routeUser = 'home';

  return <>{!!user ? <Navigate replace to={routeUser} /> : children}</>;
};

PublicRoute.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PublicRoute;
