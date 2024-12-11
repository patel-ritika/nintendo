import React from 'react';
import "../../asset/styles/home/homenews.css";
import news1 from "../../asset/images/news1.avif";
import news2 from "../../asset/images/news2.avif";
import news3 from "../../asset/images/news3.avif";
import news4 from "../../asset/images/news4.png";
import news5 from "../../asset/images/news5.avif";
import news6 from "../../asset/images/news6.avif";


const HomeNews = () => {
  return (
    <div className="home-news">
      <h1 className="news-heading">News</h1>
      
      {/* First Part */}
      <div className="news-row large-images">
        <div className="news-item">
          <img src={news1} alt="News 1" className="news-image" />
          <h6 className="news-date">12/10/24</h6>
          <h4 className="news-title">Try the latest Game Trial, Cozy Grove</h4>
          <h5 className="news-description">Camp on a haunted, ever-changing island. From December 11 at 10 a.m. PT<br/>to December 17 at 11:59 p.m. PT, Nintendo Switch Online mmbers* can...</h5>
          <p className="read-more">Read more</p>
        </div>
        <div className="news-item">
          <img src={news2} alt="News 2" className="news-image" />
          <h6 className="news-date">12/09/24</h6>
          <h4 className="news-title">Competition #22 is on now in Nintendo World Championships:<br/>NES Edition</h4>
          <h5 className="news-description">Speedrunners at the ready! This week, Nintendo Switch Online members*<br/>can take on Competition #22 of the Nintendo World Championships: NES...</h5>
          <p className="read-more">Read more</p>
        </div>
      </div>

      {/* Second Part */}
      <div className="news-row small-images">
  <div className="news-item">
    <img src={news3} alt="News 3" className="news-image" />
    <h6 className="news-date">12/09/24</h6>
    <h4 className="news-title">Catch up on Mario and his pals<br/>with this 'stache of games</h4>
    <p className="read-more">Read more</p>
  </div>
  <div className="news-item">
    <img src={news4} alt="News 4" className="news-image" />
    <h6 className="news-date">12/09/24</h6>
    <h4 className="news-title">Holiday decorations arrive with<br/>Ball Ornament Decor Pikmin</h4>
    <p className="read-more">Read more</p>
  </div>
  <div className="news-item">
    <img src={news5} alt="News 5" className="news-image" />
    <h6 className="news-date">12/09/24</h6>
    <h4 className="news-title">Join in for three NintendoVS<br/>Holiday Tournaments!</h4>
    <p className="read-more">Read more</p>
  </div>
  <div className="news-item">
    <img src={news6} alt="News 6" className="news-image" />
    <h6 className="news-date">12/06/24</h6>
    <h4 className="news-title">Book IX Begins Celebration kicks<br/>off in Fire Emblem Heroes</h4>
    <p className="read-more">Read more</p>
  </div>
</div>

    
          {/* Button */}
          <div className="news-footer">
            <button className="see-all-button">See all news articles</button>
          </div>
        </div>
  );
}

export default HomeNews;
