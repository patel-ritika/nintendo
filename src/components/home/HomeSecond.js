import React from 'react';
import "../../asset/styles/home/homesecond.css";
import onlinestore from '../../asset/images/online_store.avif'; // Replace with your image paths
import gamingsystem from '../../asset/images/gaming_system.avif';
import switchonline from '../../asset/images/switch_online.avif';


const HomeSecond = () => {
  return (
    <div className="home-second">
    {/* Section 1 */}
    <hr />
    <div className="home_second_section">
      <h1>Online store</h1>
      <img src={onlinestore} alt="Online Store" className="home_second_section-image" />
      <div className="text-and-button">
        <h4>Shop games, exclusive Nintendo merchandise, and more! Plus, get free shipping on orders $50 <br/>and over.</h4>
        <button className="action-button">Start shopping</button>
      </div>
    </div>

    {/* Section 2 */}
    <hr />
    <div className="home_second_section">
      <h1>Gaming systems</h1>
      <img src={gamingsystem} alt="Gaming Systems" className="home_second_section-image" />
      <div className="text-and-button">
        <h4>Find the perfect Nintendo Switch system for you.</h4>
        <button className="action-button">Explore now</button>
      </div>
    </div>
 {/* Section 3 */}
 <hr />
      <div className="home_second_section">
        <h1>Nintendo Switch online</h1>
        <img src={switchonline} alt="Nintendo Switch Online" className="home_second_section-image" />
        <div className="text-and-button">
          <h4>Join Nintendo Switch Online to access online play in compatible games, 100+ classic games,<br/> and more.</h4>
          <button className="action-button">Learn more</button>
        </div>
        <h5>
          Terms apply.{' '}
          <a href="https://www.nintendo.com/us/purchase-terms/" target="_blank" rel="noopener noreferrer">
            https://www.nintendo.com/us/purchase-terms/
          </a>
        </h5>
      </div>

      <hr />
    </div>
  );
}

export default HomeSecond;
