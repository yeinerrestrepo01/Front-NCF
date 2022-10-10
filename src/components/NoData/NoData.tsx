import React from 'react';
import PropTypes from 'prop-types';
import { ServerSvg } from 'global/icons';
import styles from './NoData.module.scss';

interface NoDataProps {
  text?: string | React.ReactNode;
}

const NoData: React.FC<NoDataProps> = ({ text }) => {
  return (
    <div className={styles.noData}>
      <ServerSvg />
      <span>{text || 'No hay información'}</span>
    </div>
  );
};

NoData.defaultProps = {
  text: null,
};

NoData.propTypes = {
  text: PropTypes.any,
};

export default NoData;
