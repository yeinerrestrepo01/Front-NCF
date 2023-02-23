import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useAuthentication } from 'global/hooks';

interface PublicRouteProps {
  children: React.ReactNode;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const { user, menus } = useAuthentication();
  const location = localStorage.getItem('nfc_nav');

  const handleRouteNavegate = (): string => {
    if (menus?.length > 0 && !!location) {
      if (!menus?.some((x) => x.url === JSON.parse(location))) {
        return 'home/noaccess';
      }
    }

    if (!menus || menus.length <= 0) {
      return 'home/noaccess';
    }

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
