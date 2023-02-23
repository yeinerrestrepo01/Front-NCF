import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu } from 'components/Header/elements';
import { useAuthentication } from 'global/hooks';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { user, menus, logout } = useAuthentication();
  const [urlMenu, setUrlMenu] = useState(null);

  useEffect(() => {
    if (menus?.length >= 0) {
      setUrlMenu(menus[0]);
    }

    return () => {
      setUrlMenu(null);
    };
  }, [menus]);

  return (
    <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
      <span
        className={`${styles.pointer} navbar-brand`}
        onClick={() => urlMenu && navigate(urlMenu.id === 1 ? urlMenu.url : `/home/${urlMenu.url}`)}
      >
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
      <span className={styles.display_name}>{user.displayName}</span>
      <button className={styles.logout} type="button" onClick={logout}>
        Cerrar Sesión
      </button>
    </nav>
  );
};

export default Header;
