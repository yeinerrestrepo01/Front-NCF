import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuthentication, useLocalStorage } from 'global/hooks';

const Menu: React.FC = () => {
  const { menus } = useAuthentication();
  const [, setNav] = useLocalStorage<string>('nfc_nav', null);

  const handleSelectMenu = (path: string) => {
    setNav(path);
  };

  const handleListMenu = () => {
    const listNav: JSX.Element[] = [];
    const ListMaintenance: JSX.Element[] = [];

    let listMenusOrder = menus.sort((a, b) => {
      if (a.id > b.id) {
        return 1;
      }
      if (a.id < b.id) {
        return -1;
      }
      return 0;
    });

    const existMaintenance = listMenusOrder.some((x) => x.id === 5);

    if (existMaintenance) {
      const menusMaintenance = [6, 7, 8];
      const newListMenus = [...listMenusOrder];
      newListMenus.forEach((item) => {
        if (menusMaintenance.includes(item.id)) {
          ListMaintenance.push(
            <li key={item.id}>
              <NavLink
                className={({ isActive }) => `dropdown-item ${isActive ? 'active' : ''}`}
                onClick={() => handleSelectMenu(item.url)}
                to={item.url}
                end
              >
                {item.name}
              </NavLink>
            </li>
          );
          listMenusOrder = listMenusOrder.filter((menu) => item.id !== menu.id);
        }
      });
    }

    listMenusOrder.forEach((item) => {
      if (item.id !== 5) {
        listNav.push(
          <li className="nav-item" key={item.id}>
            <NavLink
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={() => handleSelectMenu(item.url)}
              to={item.url}
              end
            >
              {item.name}
            </NavLink>
          </li>
        );
      } else {
        listNav.push(
          <li className="nav-item dropdown" key={item.id}>
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Mantenimiento
            </a>
            <ul className="dropdown-menu dropdown-menu-dark">{ListMaintenance}</ul>
          </li>
        );
      }
    });

    return listNav;
  };

  return (
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">{menus && handleListMenu()}</ul>
    </div>
  );
};

export default Menu;
