import React, {useState, useEffect} from 'react';
import "../../asset/styles/home/homedigital.css";
import { FaHeart } from 'react-icons/fa';

const items = [
    { image: require('../../asset/images/release1.jpg'), heading: 'Fitness Boxing 3: Your Personal Trainer', date: '12/5/24', price: '$49.99' },
    { image: require('../../asset/images/release2.avif'), heading: 'Mario & Luigi:Brothership', date: '11/7/24', price: '$59.99' },
    { image: require('../../asset/images/release3.avif'), heading: 'Super Mario Party Jamboree', date: '10/17/24', price: '59.99' },
    { image: require('../../asset/images/release4.avif'), heading: 'The Legend of Zelda:Echoes of Wisdom', date: '9/26/24', price: '$59.99' },
    { image: require('../../asset/images/release5.avif'), heading: 'Nintendo World Championships:NES Edition', date: '7/18/24', price: '$29.99' },
    { image: require('../../asset/images/release6.avif'), heading: 'Luigis Mansion 2 HD', date: '6/27/24', price: '$59.99' },
    { image: require('../../asset/images/release7.jpg'), heading: 'Nintendo 64-Nintendo Switch Online:MATURE 17+', date: '6/18/24', price: '$0.00' },
    { image: require('../../asset/images/release8.webp'), heading: 'Legacy of Kain Soul Reaver 1&2 Remastered', date: '12/10/24', price: '$29.99' },
    { image: require('../../asset/images/release9.jpg'), heading: 'Dog Man:Mission Impawsible', date: '12/6/24', price: '$39.99' },
    { image: require('../../asset/images/release10.jpg'), heading: 'FANTASIAN Neo Dimension', date: '12/5/24', price: '$49.99' },
    { image: require('../../asset/images/release11.jpg'), heading: 'Stella of The End', date: '12/5/24', price: '$24.99' },
    { image: require('../../asset/images/release12.avif'), heading: 'Dungeons of Dreadrock 2-The Dead Kings Secret', date: '11/28/24', price: '$14.99' },
    { image: require('../../asset/images/release13.avif'), heading: 'Santas Chimney Quest', date: '11/27/24', price: '$5.99' },
    { image: require('../../asset/images/release14.jpg'), heading: 'Nine Sols', date: '11/26/24', price: '$29.99' },
    { image: require('../../asset/images/release15.avif'), heading: 'MySims:Cozy Bundle', date: '11/19/24', price: '$39.99' },
    { image: require('../../asset/images/release16.avif'), heading: 'Stray', date: '11/19/24', price: '$29.99' },
  ];
  

const HomeDigital = () => {
    const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth <= 768) {
        setItemsPerPage(1); // Show one item on smaller screens
      } else {
        setItemsPerPage(4); // Default for larger screens
      }
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);

    return () => {
      window.removeEventListener('resize', updateItemsPerPage);
    };
  }, []);

  const handleNext = () => {
    if (startIndex + itemsPerPage < items.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  const visibleItems = items.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="homedigital-container">
    <h1>Digital new releases</h1>
    <div className="homedigital_navigation">
    <button onClick={handlePrev} className="homedigital_arrow homedigital_left-arrow">
      &larr;
    </button>
    <div className="homedigital-boxes">
      {visibleItems.map((item, index) => (
        <div className="homedigital_box" key={index}>
          <img src={item.image} alt={item.heading} />
          <h4>{item.heading}</h4>
          <h5>{item.date}</h5>
          <p>{item.price}</p>
          <div className="homedigital_box-footer">
            <h6>Nintendo Switch</h6>
            <FaHeart className="homedigital_wishlist-icon" />
          </div>
        </div>
      ))}
    </div>
    <button onClick={handleNext} className="homedigital_arrow homedigital_right-arrow">
      &rarr;
    </button>
    </div>
  </div>
  );
}

export default HomeDigital;
