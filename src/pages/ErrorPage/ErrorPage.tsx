import React from 'react';
import styles from './ErrorPage.module.scss';

const ErrorPage: React.FC = () => {
  return (
    <main className={styles.layout}>
      {/* <img src={logo} alt="logo" className={styles.logo} /> */}
      <span className={styles.oops}>Ups!!</span>
      <span className={styles.tryagain}>Algo está mal, intente más tarde.</span>
      {/* <img src={error} alt="error" className={styles.error} /> */}
    </main>
  );
};

export default ErrorPage;
