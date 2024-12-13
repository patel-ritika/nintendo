import React from 'react';
import "../../asset/styles/shop/shoptop.css";
import store1Image from '../../asset/images/store.png'; 
import store2Image from '../../asset/images/slide1.avif'; 
import store3Image from '../../asset/images/store3.avif'; 


const ShopTop = () => {
  return (
    <div className="shoptop-container">
    <div className="shoptop-row">
      <img src={store1Image} alt="Left" className="shoptop-image left-image" />
      <img src={store2Image} alt="Right" className="shoptop-image right-image" />
    </div>
    <div className="shoptop-row">
      <img src={store3Image} alt="Bottom" className="shoptop-image bottom-image" />
    </div>
  </div>
  );
}

export default ShopTop;
