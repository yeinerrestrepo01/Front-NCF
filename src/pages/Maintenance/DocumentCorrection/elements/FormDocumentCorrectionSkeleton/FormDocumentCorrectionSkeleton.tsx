import { Skeleton } from 'components';
import React from 'react';
import styles from './FormDocumentCorrectionSkeleton.module.scss';

const FormDocumentCorrectionSkeleton: React.FC = () => {
  return (
    <div className={styles.content}>
      <div className={styles.form}>
        <div className={styles.formContent}>
          <Skeleton count={6} height={40} />
        </div>
        <div className={styles.button}>
          <Skeleton height={40} />
        </div>
      </div>
    </div>
  );
};

export default FormDocumentCorrectionSkeleton;
