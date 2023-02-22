import { Skeleton } from 'components';
import React from 'react';
import styles from './FormCheckProfilesSkeleton.module.scss';

const FormCheckProfilesSkeleton: React.FC = () => {
  return (
    <div className={styles.content}>
      <div className={styles.form}>
        <div className={styles.formContent}>
          <Skeleton count={8} height={40} />
        </div>
        <div className={styles.button}>
          <Skeleton height={40} />
        </div>
      </div>
    </div>
  );
};

export default FormCheckProfilesSkeleton;
