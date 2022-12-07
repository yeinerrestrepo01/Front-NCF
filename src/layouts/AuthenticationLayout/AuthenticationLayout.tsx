import AuthenticationNavigation from 'layouts/router/AuthenticationNavigation';
import React from 'react';
import styles from './AuthenticationLayout.module.scss';

const AuthenticationLayout: React.FC = () => {
  return (
    <div className={styles.content}>
      <AuthenticationNavigation />
    </div>
  );
};

export default AuthenticationLayout;
