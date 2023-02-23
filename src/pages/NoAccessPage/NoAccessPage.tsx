import React from 'react';
import styles from './NoAccessPage.module.scss';

const NoAccessPage: React.FC = () => {
  return (
    <div className={styles.content}>
      <span className={styles.error}>No tiene acceso para visualizar el recurso</span>
    </div>
  );
};

export default NoAccessPage;
