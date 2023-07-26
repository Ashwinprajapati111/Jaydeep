import React from "react";
import { FaFacebookSquare,FaInstagramSquare } from 'react-icons/fa';
import './navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav className="main-nav">
        <div className="logo">
          <h2>Ashwin Prajapati</h2>
        </div>
        <div className="manu-link">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Service</a>
            </li>
            <li>
              <a href="#">Map</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="social">
            <ul className="social-desktop">
                <li className="facebook"><FaFacebookSquare/></li>
                <li className="insta"><FaInstagramSquare/></li>
            </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
