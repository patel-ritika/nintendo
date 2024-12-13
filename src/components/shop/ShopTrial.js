import React from 'react';
import "../../asset/styles/shop/shoptrial.css";
import trial1 from "../../asset/images/trial1.avif"; 
import trial2 from "../../asset/images/trial2.jpg";
import trial3 from "../../asset/images/trial3.avif";

const ShopTrial = () => {
  return (
    <div className="shoptrial-container">
      <div className="shoptrial-row">
        <div className="shoptrial-item">
          <img src={trial1} alt="Item 1" className="shoptrial-image" />
          <h4>14-day free trial membership of Nintendo<br />Switch Online with purchase of select digital<br />games!</h4>
        </div>
        <div className="shoptrial-item">
          <img src={trial2} alt="Item 2" className="shoptrial-image" />
          <h4>Join the jumbo jamboree!</h4>
        </div>
        <div className="shoptrial-item">
          <img src={trial3} alt="Item 3" className="shoptrial-image" />
          <h4>Take a peek at stocking<br />stuffers and small<br />gifts</h4>
        </div>
      </div>
    </div>
  );
}

export default ShopTrial;
