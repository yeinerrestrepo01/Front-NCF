import React from 'react';
import PropTypes from 'prop-types';
import styles from './Skeleton.module.scss';

interface SkeletonProps {
  height?: string | number;
  width?: string | number;
  count?: number;
}

const Skeleton: React.FC<SkeletonProps> = ({ height, width, count }) => {
  if (count > 1) {
    return (
      <>
        {Array(count)
          .fill('skeleton')
          .map((el, index) => (
            <div
              key={`${el}-${index + 1}`}
              className={`${styles.skeleton} ${styles.margin}`}
              style={{ height, width, minHeight: height, maxHeight: height }}
            />
          ))}
      </>
    );
  }
  return (
    <div
      className={styles.skeleton}
      style={{ height, width, minHeight: height, maxHeight: height }}
    />
  );
};

Skeleton.defaultProps = {
  height: 'auto',
  width: null,
  count: 1,
};

Skeleton.propTypes = {
  height: PropTypes.any,
  width: PropTypes.any,
  count: PropTypes.number,
};

export default Skeleton;
