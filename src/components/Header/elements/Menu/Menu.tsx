import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu: React.FC = () => {
  return (
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            to="/home"
            end
          >
            Corrección montos
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            to="partial"
            end
          >
            Anulación Parcial
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            to="sap"
            end
          >
            Envio SAP
          </NavLink>
        </li>
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
              <NavLink className="dropdown-item" to="/home/1" end>
                Solicitud secuencia
              </NavLink>
            </li>
            <li>
              <NavLink className="dropdown-item" to="/home/1" end>
                Configuración Tipo NCF
              </NavLink>
            </li>
            <li>
              <NavLink className="dropdown-item" to="/home/1" end>
                Anulación Documento
              </NavLink>
            </li>
            <li>
              <NavLink className="dropdown-item" to="/home/1" end>
                Correción Documento
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
