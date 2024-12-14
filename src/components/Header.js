import React, {useState} from 'react';
import { Link } from "react-router-dom";
import "../asset/styles/header.css";
import { FaHeart, FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";
import logoImage from "../asset/images/nintendologo.jpg";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
        <img src={logoImage} alt="Logo" />
        </Link>
      </div>

       {/* Mobile Icons */}
       <div className={`mobile-icons ${isMenuOpen ? "show" : ""}`}>
        <FaHeart />
        <FaShoppingCart />
        <FaUser />
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
                {isMenuOpen ? <FaTimes /> : <FaBars />}
            </div>

           

      <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
        <ul className="nav-list">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
          <Link to="/order">Order</Link>
          </li>
        </ul>
      </nav>

      <div className="right-icons">
        <div className="icon">
          <FaHeart />
          <span>Wish List</span>
        </div>
        <div className="icon">
          <FaShoppingCart />
          <span>Cart</span>
        </div>
        <div className="icon">
          <FaUser />
          <span>Log in/Sign up</span>
        </div>
      </div>

      
    </header>
  );
}

export default Header;
