import React, {useState, useEffect} from 'react';
import "../../asset/styles/about/abouthistory.css";

import historyimg1 from '../../asset/images/history1.jpeg';
import historyimg2 from '../../asset/images/history2.avif';
import historyimg3 from '../../asset/images/history3.avif';
import historyimg4 from '../../asset/images/history4.avif';
import historyimg5 from '../../asset/images/history5.jpeg';
import historyimg6 from '../../asset/images/history6.avif';
import historyimg7 from '../../asset/images/history7.jpg';
import historyimg8 from '../../asset/images/history8.jpg';
import historyimg9 from '../../asset/images/history9.avif';
import historyimg10 from '../../asset/images/history10.jpg';
import historyimg11 from '../../asset/images/history11.jpg';
import historyimg12 from '../../asset/images/history12.jpg';
import historyimg13 from '../../asset/images/history13.png';
import historyimg14 from '../../asset/images/history14.webp';
import historyimg15 from '../../asset/images/history15.webp';
import historyimg16 from '../../asset/images/history16.jpg';
import historyimg17 from '../../asset/images/history17.jpg';
import historyimg18 from '../../asset/images/history18.jpg';
import historyimg19 from '../../asset/images/history19.webp';

const images = [
    { src: historyimg1, year: "1889", paragraph: "Fusajiro Yamauchi began a small business manufacturing “Hanafuda” playing cards in Kyoto, Japan." },
    { src: historyimg2, year: "1980", paragraph: "Announced a wholly owned subsidiary, Nintendo of America Inc. (NOA). Started selling the Game & Watch™ product line." },
    { src: historyimg3, year: "1981", paragraph: "Developed and began distribution of the coin-operated video game Donkey Kong™. This video game quickly became the hottest selling individual coin-operated machine in the business." },
    { src: historyimg4, year: "1985", paragraph: "The Nintendo Entertainment System™ (NES™) launched in America and became a smash hit." },
    { src: historyimg5, year: "1985", paragraph: "Mario™ was first introduced in the Super Mario Bros.™ game." },
    { src: historyimg6, year: "1986", paragraph: "The character Link™ made his first appearance in the Legend of Zelda™ game for NES." },
    { src: historyimg7, year: "1989", paragraph: "Introduced Game Boy™, the first portable handheld game system. Originally bundled with the Tetris™ game, it was an instant phenomenon." },
    { src: historyimg8, year: "1991", paragraph: "The 16-bit Super Nintendo Entertainment System™ (Super NES™) was released in the U.S." },
    { src: historyimg9, year: "1996", paragraph: "The Nintendo 64™ system launched in the U.S. on Sept. 29, along with the critically acclaimed Super Mario 64™ game." },
    { src: historyimg10, year: "1998", paragraph: "Nintendo introduced Game Boy Color™. Pokémon™, a breakthrough game concept for Game Boy, was introduced to the world and generated a nationwide craze to “Catch ‘em All!" },
    { src: historyimg11, year: "2001", paragraph: "Launched the Game Boy™ Advance and the Nintendo GameCube™ systems. The Nintendo GameCube was the first Nintendo system to use optical discs instead of cartridges for its games." },
    { src: historyimg12, year: "2004", paragraph: "Launched the Nintendo DS™, an innovative, dual-screen handheld gaming system." },
    { src: historyimg13, year: "2006", paragraph: "Nintendo introduced the Wii™ system and with it several advanced features. Wireless motion-sensitive controllers, built-in Wi-Fi capability, and a host of other features made Wii the best-selling later-generation console system in the world." },
    { src: historyimg14, year: "2008", paragraph: "Wii became the first system purchased by more than 10 million Americans in a single year." },
    { src: historyimg15, year: "2011", paragraph: "The Nintendo 3DS™ system launched, letting users view and play 3D content without special 3D glasses." },
    { src: historyimg16, year: "2012", paragraph: "The Wii U™ system launched with the innovative Wii U GamePad controller that offered users new ways to play together, including off-TV. This system also introduced support for amiibo™ accessories." },
    { src: historyimg17, year: "2015", paragraph: "The Splatoon™ game launched, introducing the squid-kids known as Inklings." },
    { src: historyimg18, year: "2017", paragraph: "The Nintendo Switch™ system launched, along with hits including Super Mario Odyssey™ and The Legend of Zelda™: Breath of the Wild." },
    { src: historyimg19, year: "2019", paragraph: "The Nintendo Switch Lite system launched. Designed specifically for portable play, the compact system plays the library of Nintendo Switch games that work in handheld mode." },
  ];

const AboutHistory = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
   const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    const handleResize = () => {
        if (window.innerWidth <= 768) {
            setItemsPerPage(1);
        } else {
            setItemsPerPage(4);
        }
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);

    return () => {
        window.removeEventListener("resize", handleResize);
    };
}, []);

  const handleNext = () => {
    if (currentIndex + itemsPerPage < images.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  const currentImages = images.slice(currentIndex, currentIndex + itemsPerPage);
  return (
    <div className="about-history">
      <h1>Our History</h1>
      <h4>We’ve been dedicated to our mission for a long time—since 1889, in fact.</h4>

      <div className="abouthistory_slider-container">
        {currentIndex > 0 && (
          <button className="abouthistory_arrow abouthistory_left-arrow" onClick={handlePrev}>
             &larr; {/* Left arrow */}
          </button>
        )}

        <div className="abouthistory_image-grid">
          {currentImages.map((item, index) => (
            <div key={index} className="abouthistory_image-item">
              <img src={item.src} alt={`Year ${item.year}`} />
              <h5>{item.year}</h5>
              <p>
                {item.paragraph.split('. ').map((line, idx) => (
                    <React.Fragment key={idx}>
                        {line}.
                        <br/>
                    </React.Fragment>
                ))}
                </p>
            </div>
          ))}
        </div>

        {currentIndex + itemsPerPage < images.length && (
          <button className="abouthistory_arrow abouthistory_right-arrow" onClick={handleNext}>
             &rarr;{/* Right arrow */}
          </button>
        )}
      </div>
    </div>
  );
}

export default AboutHistory;
