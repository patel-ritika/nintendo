import React from 'react';
import "../../asset/styles/about/aboutdetail.css";
import superstar from '../../asset/images/superstar.avif'; 
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
