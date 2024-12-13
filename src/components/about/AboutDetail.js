import React from 'react';
import "../../asset/styles/about/aboutdetail.css";
import superstar from '../../asset/images/superstar.avif'; // Replace with your actual image path
import detail from '../../asset/images/detail.webp'; // Replace with your actual image path
import { FaEnvelope } from 'react-icons/fa';

const AboutDetail = () => {
  return (
    <div className="aboutdetail-container">
       {/* Top Section */}
       <div className="aboutdetail_top-section">
        <div className="aboutdetail_text-content">
          <h1>Superstars wanted</h1>
          <h4>Join us in putting smiles on the faces of people around the world.</h4>
          <button className="explore-button">Explore careers</button>
        </div>
        <img src={superstar} alt="Career" className="career-image" />
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <h3>Contact us</h3>
        <p>Whether you need customer support, are interested in doing business <br/>
        with us, or have other questions, here’s how to get in touch.</p>
        <h4>Address:</h4>
        <h5>Nintendo of America<br />4600 150th Ave NE<br />Redmond, WA 98052</h5>
        <h4>Accessibility:</h4>
        <p>
          Nintendo endeavors to provide products and services that can be enjoyed<br/>
           by people of all ages and abilities. If you have questions about the<br/>
          accessibility features of Nintendo's products or services, please contact us<br/>
           using one of the methods below.
        </p>
        <h4>TTY/TDD Phone:</h4>
        <h5>Customers who use a TTY/TDD device can contact Nintendo by using<br/> their TTY.</h5>
        <div className="contact-image-container">
          <img src={detail} alt="Contact" className="contact-image" />
        </div>
      </div>

      {/* Additional Email Contacts */}
      <div className="email-section">
        <h3>Additional email contacts:</h3>
        <ul className="email-list">
          <li><FaEnvelope /> Charitable donations</li>
          <li><FaEnvelope /> Paid media queries</li>
          <li><FaEnvelope /> Product placements</li>
          <li><FaEnvelope /> Licensing Inquiries</li>
          <li><FaEnvelope /> Partnership Inquiries</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutDetail;
