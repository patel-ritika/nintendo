import React from 'react';
import "../../asset/styles/shop/shopexplore.css";
import explore1 from '../../asset/images/reward.avif'; 
import explore2 from '../../asset/images/trial1.avif';

const ShopExplore = () => {
  return (
    <div className="shopexplore-container">
    <h1 className="explore-heading">Explore collections</h1>
    <div className="shopexplore_button-row">
        <button className="explore-button">Nintendo Switch systems</button>
        <button className="explore-button">Exclusives</button>
        <button className="explore-button">Games under $20</button>
        <button className="explore-button">Top picks: Games</button>
        <button className="explore-button">Retro collection</button>
        <button className="explore-button">It's Peach time!</button>
    </div>
    <div className="shopexplore_image-row">
        <div className="shopexplore_image-item">
            <img src={explore1} alt="Collection 1" className="explore-image" />
            <h4 className="shopexplore_image-heading">My Nintendo rewards</h4>
        </div>
        <div className="shopexplore_image-item">
            <img src={explore2} alt="Collection 2" className="explore-image" />
            <h4 className="shopexplore_image-heading">Nintendo Switch Online 14-Day Trial Memberships</h4>
        </div>
    </div>
</div>
  );
}

export default ShopExplore;
