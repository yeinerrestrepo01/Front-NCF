import PropTypes from 'prop-types';
import React from 'react';
import { PropagateLoader } from 'react-spinners';
import styles from './BackDrop.module.scss';

interface BackDropProps {
  show: boolean;
}

const BackDrop: React.FC<BackDropProps> = ({ show }) => {
  return (
    <div className={`${styles.content} ${show ? styles.display : styles.hidden}`}>
      <PropagateLoader
        color="#7b64c3"
        loading={show}
        cssOverride={{
          display: 'block',
          margin: '0 auto',
        }}
        size={25}
      />
    </div>
  );
};

BackDrop.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default BackDrop;
