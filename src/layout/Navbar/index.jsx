import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
function Navbar() {
  return (
    <div className="navbarContainer">
      <div className="navbar">
        <div className="header">
          <div className="headerLeft">
            <p>Visit Us</p>
            <p>Online Support</p>
          </div>
          <div className="headerRight">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-dribbble"></i>
            <i class="fa-brands fa-behance"></i>
          </div>
        </div>
        <div className="nav">
          <div className="logo">
            <img
              src="https://preview.colorlib.com/theme/woodrox/img/logo.png.webp"
              alt=""
            />
            <img
              className="img2"
              src="https://preview.colorlib.com/theme/woodrox/img/logo-2.png.webp"
              alt=""
            />
          </div>
          <ul className="ul">
            <div class="menuRes">
              <i class="fa-solid fa-bars"></i>
              <i class="fa-solid fa-xmark d-none"></i>
            </div>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li className="pages">
              Pages
              <div className="menu">
                <Link to="/project">PROJECT</Link>
                <Link to="/projectDetails">PROJECT DETAILS</Link>
                <Link>ELEMENTS</Link>
              </div>
            </li>
            <li className="pages">
              <Link>Blog</Link>
              <div className="menu">
                <Link>BLOG</Link>
                <Link>BLOG DETAILS</Link>
              </div>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
