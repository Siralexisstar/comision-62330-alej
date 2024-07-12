import React from "react";
import Navitem from "../Navitem/Navitem";
import { categorias, title } from "../../components/mock/MockData";
import CartWidget from "../CartWidget/CartWidget";
import Sidebar from "../SideBar/SideBar";
import "./Navbar.css"; // Asegúrate de importar el archivo CSS
import VelasserVintage from "../../assets/logo/VelasserVintage.png";

const Navbar = ({ categorias, title }) => {
  console.log(categorias);
  return (
    <>
      <header className="header">
        <div className="top-bar">
          <div className="social-icons">
            <i className="fab fa-instagram"></i>
            <i className="fab fa-facebook-f"></i>
          </div>
          <div className="logo">
            <img src={VelasserVintage} alt="Logo" className="logo-img" />
          </div>
          <div className="right-menu">
            <CartWidget />
            <span>Identifícate</span>
            <span>ES</span>
          </div>
        </div>
        <div className="navbar-container">
          <Sidebar />
          <nav className="navbar navbar-expand-lg">
            <button
              className="navbar-toggler btn-custom-gray"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
              <ul className="navbar-nav">
                {categorias.map((categoria, index) => (
                  <li className="nav-item" key={index}>
                    <a className="nav-link" href="#">
                      {categoria}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
