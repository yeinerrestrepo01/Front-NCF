import { Skeleton } from 'components';
import React from 'react';
import styles from './FormCheckProfilesSkeleton.module.scss';

const FormCheckProfilesSkeleton: React.FC = () => {
  return (
    <div className={styles.content}>
      <Skeleton count={3} height={40} />
    </div>
  );
};

export default FormCheckProfilesSkeleton;
