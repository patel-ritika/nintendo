import React from 'react';
import "../asset/styles/footer.css";
import footerlogo from '../asset/images/nintendologo.jpg'; // Import your logo here
import smallfooter from '../asset/images/footer.png'; // Import your small image here


const Footer = () => {
  return (
    <footer>
    {/* Top Bar */}
    <div className="footer-top-bar">
      <img src={footerlogo} alt="Logo" className="footer-logo" />
      <div className="footer-social-icons">
        <i className="fab fa-facebook"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-youtube"></i>
      </div>
    </div>

    {/* Middle Section */}
    <div className="footer-middle">
      <div className="footer-column">
        <h4>About Nintendo</h4>
        <ul>
          <li>Careers</li>
          <li>Corporate Social Responsibility</li>
        </ul>
      </div>
      <div className="footer-column">
          <h4>Shop</h4>
          <ul>
            <li>Games</li>
            <li>Hardware</li>
            <li>Merchandise</li>
            <li>Sales & Deals</li>
            <li>Exclusives</li>
            <li>Online Service</li>
            <li>Nintendo NY Store</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Orders</h4>
          <ul>
            <li>Order Details</li>
            <li>Shipping Info</li>
            <li>Returns & Exchanges</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Support</h4>
          <ul>
            <li>Nintendo Switch</li>
            <li>Nintendo Account</li>
            <li>Other Systems</li>
            <li>Repairs</li>
            <li>Nintendo Product Recycling</li>
            <li>Warranty</li>
            <li>Licensed Product Information</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Parents</h4>
          <ul>
            <li>Info for Parents</li>
            <li>Parental Controls</li>
          </ul>
          <h4>Community</h4>
          <ul>
            <li>Community Guidelines</li>
            <li>Online Safety Principles</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Privacy</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Cookies and Interest-Based Ads</li>
          </ul>
          <h4>Documents & Policies</h4>
          <ul>
            <li>Health & Safety Precautions</li>
            <li>Wireless Regulatory Info</li>
            <li>Supply Chain Transparency</li>
          </ul>
          <div className="footer-small-image">
      <img src={smallfooter} alt="Small Footer Image" />
    </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <p>© Nintendo. Games are property of their respective owners. Nintendo of America Inc. Headquarters are in Redmond, Washington, USA</p>
        </div>
        <div className="footer-bottom-right">
        <ul>
            <li>Contact Us</li>
            <li>Website Feedback</li>
            <li>Terms of Use</li>
          </ul>
        </div>
      </div>
    </footer>
        
  );
}

export default Footer;
