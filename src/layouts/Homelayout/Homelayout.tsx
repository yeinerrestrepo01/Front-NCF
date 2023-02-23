import { Header } from 'components';
import { useAuthentication } from 'global/hooks';
import HomeNavegation from 'layouts/router/HomeNavegation';
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';

const Homelayout: React.FC = () => {
  const { menus, user } = useAuthentication();
  const location = localStorage.getItem('nfc_nav');
  const navigate = useNavigate();

  useEffect(() => {
    if (!!user && (!menus || menus.length <= 0)) {
      navigate('/home/noaccess');
    }
  }, [menus, navigate, user]);

  useEffect(() => {
    if (menus?.length > 0 && !!location) {
      if (!menus?.some((x) => x.url === JSON.parse(location))) {
        navigate('/home/noaccess');
      }
    }

    if (!menus || menus.length <= 0) {
      navigate('/home/noaccess');
    }
  }, [location, menus, navigate]);

  return (
    <div>
      <Header />
      <div>
        <HomeNavegation />
      </div>
    </div>
  );
};

export default Homelayout;
