import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu } from 'components/Header/elements';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
      <span className={`${styles.pointer} navbar-brand`} onClick={() => navigate('/home')}>
        ABInBev
      </span>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <Menu />
    </nav>
  );
};

export default Header;
