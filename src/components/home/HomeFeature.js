import React, {useState} from 'react';
import "../../asset/styles/home/homefeature.css";
import img1 from "../../asset/images/feature1.avif";
import img2 from "../../asset/images/feature2.webp";
import img3 from "../../asset/images/feature3.jpg";
import img4 from "../../asset/images/feature4.avif";
import img5 from "../../asset/images/feature5.avif";
import img6 from "../../asset/images/feature6.avif";
import img7 from "../../asset/images/feature7.avif";
import img8 from "../../asset/images/feature8.avif";
import img9 from "../../asset/images/feature9.avif";

const HomeFeature = () => {
    const [currentImages, setCurrentImages] = useState(0);

    const images = [
        { src: img1, text: "Available Now", bgColor: "#e60012", heading: "Mario & Luigi:Brothership" },
        { src: img2, text: "Available Now", bgColor: "#e60012", heading: "The Legend of Zelda:Echoes of Wisdom" },
        { src: img3, text: "Available Now", bgColor: "#e60012", heading: "MySims:Cozy Bundle" },
        { src: img4, text: "Learn more", bgColor: "#0b2b6b", heading: "See the latest bunch of classic games!" },
        { src: img5, text: "Learn more", bgColor: "#0b2b6b", heading: "Check out this year's nominees" },
        { src: img6, text: "Learn more", bgColor: "#0b2b6b", heading: "Tetris 99 43rd MAXIMUS CUP" },
        { src: img7, text: "Available Now", bgColor: "#e60012", heading: "Looking for some wholesome, comfy fun?" },
        { src: img8, text: "Learn more", bgColor: "#0b2b6b", heading: "Create custom cards to share with friends & family" },
        { src: img9, text: "Pre-order now", bgColor: "#0b2b6b", heading: "Xenoblade Chronicles X:Definitive Edition" },
    ];
    

  const handleNext = () => {
    setCurrentImages(1); // Show next set of 4 images
  };

  const handlePrev = () => {
    setCurrentImages(0); // Show initial set of 5 images
  };
  return (
    <div className="home-feature">
  <h1 className="home-feature-heading">Featured</h1>
  <div className="home-feature-navigation-container">
    <button onClick={handlePrev} className="arrow left-arrow">
      &larr;
    </button>
    <div className="home-feature-container">
      {images
        .slice(currentImages === 0 ? 0 : 5, currentImages === 0 ? 5 : 9)
        .map((image, index) => (
          <div key={index} className="home-feature-box">
            <img src={image.src} alt={`Image ${index + 1}`} />
            <h5>{image.heading}</h5>
            <h6 style={{ backgroundColor: image.bgColor }}>{image.text}</h6>
            <p>Nintendo Switch</p>
          </div>
        ))}
    </div>
    <button onClick={handleNext} className="arrow right-arrow">
      &rarr;
    </button>
  </div>
</div>

  );
}

export default HomeFeature;
