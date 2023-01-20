import React from 'react';
import styles from './ModalDetailErrorSap.module.scss';
import PropTypes from 'prop-types';

interface ModalDetailErrorSapProps {
  textError: string;
}

const ModalDetailErrorSap: React.FC<ModalDetailErrorSapProps> = ({ textError }) => {
  return (
    <div className={styles.content}>
      <span>{textError}</span>
    </div>
  );
};

ModalDetailErrorSap.propTypes = {
  textError: PropTypes.string.isRequired,
};

export default ModalDetailErrorSap;
