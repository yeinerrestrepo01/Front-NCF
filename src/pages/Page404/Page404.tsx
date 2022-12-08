import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import styles from './Page404.module.scss';

interface Page404Props {
  hideButton?: boolean;
}

const Page404: React.FC<Page404Props> = ({ hideButton }) => {
  const navigate = useNavigate();

  return (
    <main className={styles.layout}>
      <span className={styles.sorry}>Lo sentimos, está página no existe</span>
      {!hideButton && (
        <button onClick={() => navigate(-1)} type="button">
          Regresar
        </button>
      )}
    </main>
  );
};

Page404.defaultProps = {
  hideButton: false,
};

Page404.propTypes = {
  hideButton: PropTypes.bool,
};

export default Page404;
