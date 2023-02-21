import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuthentication } from 'global/hooks';
import { MenuItems, ProfilesData } from 'global/types';
import { MenuData, ProfilesMenu } from 'global/constants';

const Menu: React.FC = () => {
  const { user } = useAuthentication();

  const handleMenu = (): MenuItems[] => {
    const profiles = user.perfiles.map((profile) => {
      switch (profile.nombre) {
        case ProfilesData[0]:
          return ProfilesMenu.find((menu) => menu.profile === ProfilesData.Anulaciones);
        case ProfilesData[1]:
          return ProfilesMenu.find((menu) => menu.profile === ProfilesData.Recalculo);
        case ProfilesData[2]:
          return ProfilesMenu.find((menu) => menu.profile === ProfilesData.Root);
        case ProfilesData[3]:
          return ProfilesMenu.find((menu) => menu.profile === ProfilesData.Soporte);

        default:
          return null;
      }
    });

    const listMenu: MenuItems[] = [];
    profiles.forEach((menu) => {
      menu.menu.forEach((item) => {
        if (!listMenu.some((x) => x.id === item)) {
          const dataMenu = MenuData.find((x) => x.id === item);
          listMenu.push(dataMenu);
        }
      });
    });

    return listMenu;
  };

  return (
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        {handleMenu()?.map((item) =>
          item.url ? (
            <li className="nav-item" key={item.id}>
              <NavLink
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                to={item.url}
                end
              >
                {item.name}
              </NavLink>
            </li>
          ) : item.id === 5 ? (
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Mantenimiento
              </a>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li>
                  <NavLink className="dropdown-item" to="settings" end>
                    Configuración Tipo NCF
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="cancellation" end>
                    Anulación Documento
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="correction" end>
                    Correción Documento
                  </NavLink>
                </li>
              </ul>
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
};

export default Menu;
