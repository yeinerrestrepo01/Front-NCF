import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        ABInBev
      </a>
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
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <NavLink
            className={({ isActive }) => `nav-item ${styles.link} ${isActive ? 'active' : ''}`}
            to="/"
            end
          >
            <span className="nav-link">
              Corrección montos <span className="sr-only"></span>
            </span>
          </NavLink>
          <NavLink
            className={({ isActive }) => `nav-item ${styles.link} ${isActive ? 'active' : ''}`}
            to="partial"
            end
          >
            <span className="nav-link">
              Anulación Parcial <span className="sr-only"></span>
            </span>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
