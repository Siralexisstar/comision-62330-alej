import React from "react";
import { Link } from "react-router-dom";

export const ExpandItem = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDarkDropdown"
          aria-controls="navbarNavDarkDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                INICIO
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                TIENDA
              </a>
              <ul className="dropdown-menu dropdown-menu-white">
                <li>
                  <Link className="dropdown-item" to="/aromatic-candles">
                    VELAS FLORALES
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/non-aromatic-candles">
                    VELAS FRUTALES
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/non-aromatic-candles">
                    VELAS EN RECIPIENTES
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/non-aromatic-candles">
                    VELAS HALLOWEEN
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/non-aromatic-candles">
                    VELAS NAVIDAD
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/non-aromatic-candles">
                    RECUERDOS, BODAS, BAUTIZOS Y COMUNIONES
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/quienes-somos">
                QUIENES SOMOS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">
                CONTACTO
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default ExpandItem;
