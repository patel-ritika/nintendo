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

   
    
    const handleLinkClick = () => {
      console.log("Link clicked, closing menu.");
      setIsMenuOpen(false);
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
        <Link to="/wishlist" onClick={handleLinkClick} className="mobile-wishlist-link">
        <FaHeart />
        </Link>
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
          <Link to="/wishlist" onClick={handleLinkClick} className="wishlist-link">
          <span>Wish List</span>
          </Link>
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
