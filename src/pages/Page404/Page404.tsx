import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './Page404.module.scss';

interface Page404Props {
  hideButton?: boolean;
}

const Page404: React.FC<Page404Props> = ({ hideButton }) => {
  return (
    <main className={styles.layout}>
      {/* <img src={logo} alt="Company" className={styles.logo} />
      <img src={img404} alt="404" className={styles.four} /> */}
      <span className={styles.sorry}>Lo sentimos, está página no existe</span>
      {!hideButton && (
        <NavLink to="/">
          <button type="button">Regresar</button>
        </NavLink>
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
