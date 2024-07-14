import React from "react";
import { menu } from "../../components/mock/MockData";
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";
import LogoImg from "../Logo/LogoImg";
import Search from "../Search/Search";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = ({ categorias, title }) => {
  console.log(categorias);
  return (
    <>
      <header className="header">
      <div className="top-bar">
          <div className="social-icons">
            <a href="https://www.instagram.com/velassere/?igsh=MTI5aG83b3gzdnB2YQ%3D%3D" target="_blank" rel="noopener noreferrer" className="social-icon social-icon-instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon social-icon-facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon social-icon-youtube">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
          <div className="logo-container">
            <LogoImg />
          </div>
          <div className="right-menu custom-color">
            <CartWidget />
            <span>Identifícate</span>
            <span>ES</span>
          </div>
        </div>
        <div className="navbar-container">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                  {menu.map((menu, index) => (
                    <li className="nav-item" key={index}>
                      <a className="nav-link" href="#">
                        {menu}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
          {/* <div>
            <Search />
          </div> */}
        </div>
      </header>
    </>
  );
};

export default Navbar;
