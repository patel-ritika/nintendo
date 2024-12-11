import React, {useState} from 'react';
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
        <img src={logoImage} alt="Logo" />
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
          <li>About</li>
          <li>Shop</li>
          <li>Orders</li>
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
