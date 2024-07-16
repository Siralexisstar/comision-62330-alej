import React from "react";
import { menu } from "../../components/mock/MockData";
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";
import LogoImg from "../Logo/LogoImg";
import Search from "../Search/Search";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ExpandItem from "../ExpandItem/ExpandItem";

const Navbar = ({ categorias, title }) => {
  console.log(categorias);
  return (
    <>
      <header className="header">
        <div className="top-bar">
          <div className="social-icons">
            <a
              href="https://www.instagram.com/velassere/?igsh=MTI5aG83b3gzdnB2YQ%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon social-icon-instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon social-icon-facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon social-icon-youtube"
            >
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
        <ExpandItem />
      </header>
    </>
  );
};

export default Navbar;
