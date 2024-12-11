import React, {useState, useEffect} from 'react';
import "../../asset/styles/home/hometop.css";
import bigImage1 from "../../asset/images/slide1.avif"; // Import your images
import bigImage2 from "../../asset/images/slide2.jpg";
import bigImage3 from "../../asset/images/slide3.jpg";
import bigImage4 from "../../asset/images/slide4.jpg";
import smallImage from "../../asset/images/everyone.png";


const HomeTop = () => {
    const [activeIndex, setActiveIndex] = useState(0); // Active image ka index
  const images = [
    { id: 0, big: bigImage1, text: "Bundle up with these Nintendo Switch sets" },
    { id: 1, big: bigImage2, text: "The party of the year is finally here-start playing today! " },
    { id: 2, big: bigImage3, text: "Punch and groove with an action-packed workout - available now!" },
    { id: 3, big: bigImage4, text: "Move and groove with these active games!" },
  ];

  // Automatic transition effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5 seconds
    return () => clearInterval(interval); // Cleanup interval
  }, []);

  const handleButtonClick = (index) => {
    setActiveIndex(index); // User-defined image selection
  };
  return (
    <div className="home-top">
    <div className="image-container">
      <img
        src={images[activeIndex].big}
        alt={`Image ${activeIndex + 1}`}
        className="big-image"
      />
    </div>
    <div className="image-info">
      <h4 className="image-text">{images[activeIndex].text}</h4>
      <img src={smallImage} alt="Small Overlay" className="small-image" />
    </div>
    <div className="button-container">
      {images.map((_, index) => (
        <button
          key={index}
          className={`slider-button ${activeIndex === index ? "active" : ""}`}
          style={{ backgroundColor: "purple" }}
          onClick={() => handleButtonClick(index)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  </div>
  );
}

export default HomeTop;
