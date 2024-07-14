import React from "react";
import { menu } from "../../components/mock/MockData";
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";
import LogoImg from "../Logo/LogoImg";
import Search from "../Search/Search";

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
