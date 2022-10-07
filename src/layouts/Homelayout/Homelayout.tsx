import { Header } from 'components';
import HomeNavegation from 'layouts/router/HomeNavegation';
import React from 'react';

const Homelayout: React.FC = () => {
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
