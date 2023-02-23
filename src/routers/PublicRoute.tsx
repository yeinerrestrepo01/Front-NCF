import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useAuthentication } from 'global/hooks';

interface PublicRouteProps {
  children: React.ReactNode;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const { user } = useAuthentication();
  const location = localStorage.getItem('nfc_nav');

  const handleRouteNavegate = (): string => {
    const routeUser = location
      ? location.includes('home')
        ? 'home'
        : `home/${JSON.parse(location)}`
      : 'home';

    return routeUser;
  };

  return <>{!!user ? <Navigate replace to={handleRouteNavegate()} /> : children}</>;
};

PublicRoute.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PublicRoute;
