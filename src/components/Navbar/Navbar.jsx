import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";
import LogoImg from "../Logo/LogoImg";
import ExpandItem from "../ExpandItem/ExpandItem";
import { LoginButton } from "../LoginPage/LoginPage";
import { LogoutButton } from "../Logout.jsx/Logout";
import { Profile } from "../LoginPage/Profile";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = ({ categorias, title }) => {
  const { isAuthenticated } = useAuth0();

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
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon social-icon-twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
          <div className="logo-container">
            <LogoImg />
          </div>
          <div className="right-menu custom-color">
            <CartWidget />
            {isAuthenticated ? (
              <>
                <Profile />
                <LogoutButton />
              </>
            ) : (
              <LoginButton />
            )}
            <span>ES</span>
          </div>
        </div>
        <ExpandItem />
      </header>
    </>
  );
};

export default Navbar;
