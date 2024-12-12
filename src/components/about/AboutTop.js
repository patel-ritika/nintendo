import React from 'react';
import "../../asset/styles/about/abouttop.css";
import laptopImage from "../../asset/images/abouttop.jpg";

const AboutTop = () => {
  return (
    <div className="about-top-container">
      {/* Top image */}
      <img src={laptopImage} alt="Laptop" className="abouttop-image" />

      {/* White box with red border */}
      <div className="content-box">
        <h2>Who we are</h2>
        <p>
        Nintendo's mission is to put smiles on the faces of everyone we touch. We do so by creating new<br/>
         surprises for people across the world to enjoy together. We've forged our own path since 1889,<br/>
          when we began making hanafuda playing cards in Kyoto, Japan. Today, we’re fortunate to be able to<br/>
           share our characters, ideas and worlds through the medium of video games and the entertainment<br/>
            industry.
        </p>
        <p>
        Nintendo of America, established in 1980 and based in Redmond, Wash., is a wholly owned<br/>
         subsidiary of Nintendo Co., Ltd. We are committed to delivering best-in-class products and services<br/>
          to our customers and to investing in the well-being of our employees as part of the global Nintendo<br/>
           family.
        </p>
      </div>
    </div>
  );
}

export default AboutTop;
