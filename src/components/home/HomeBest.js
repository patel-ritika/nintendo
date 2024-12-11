import React, {useState, useEffect} from 'react';
import "../../asset/styles/home/homebest.css";
import { FaHeart } from 'react-icons/fa';

const items = [
  { image: require('../../asset/images/best1.avif'), heading: 'Super Mario Party Jamboree', date: '10/17/24', price: '$59.99' },
  { image: require('../../asset/images/best2.avif'), heading: 'No More Snow', date: '12/5/24', price: '$1.99' },
  { image: require('../../asset/images/best3.webp'), heading: 'Hogwarts Legacy', date: '11/14/23', price: '$14.99' },
  { image: require('../../asset/images/best4.jpg'), heading: 'Stardew Valley', date: '10/5/17', price: '$14.99' },
  { image: require('../../asset/images/best5.jpg'), heading: 'Minecraft', date: '6/20/18', price: '$29.99' },
  { image: require('../../asset/images/best6.avif'), heading: 'MySims:Cozy Bundle', date: '11/19/24', price: '$39.99' },
  { image: require('../../asset/images/best7.avif'), heading: 'Overcooked! All You Can Eat', date: '3/23/21', price: '$39.99' },
  { image: require('../../asset/images/best8.avif'), heading: 'Nickelodeon All-Star Braw!', date: '10/5/21', price: '$4.99' },
  { image: require('../../asset/images/best9.avif'), heading: 'Sid Meiers Civilization VI', date: '11/16/18', price: '$29.99' },
  { image: require('../../asset/images/best10.avif'), heading: 'LEGO Harry Potter Collection', date: '10/30/18', price: '$5.99' },
  { image: require('../../asset/images/best11.avif'), heading: 'Hunting Simulator 2', date: '11/3/20', price: '$3.99' },
  { image: require('../../asset/images/best12.webp'), heading: 'Mario Kart 8 Deluxe', date: '4/28/17', price: '$59.99' },
  { image: require('../../asset/images/best13.avif'), heading: 'Nintendo Switch Sports', date: '4/29/22', price: '$39.99' },
  { image: require('../../asset/images/best14.webp'), heading: 'Super Smash Bros. Ultimate', date: '12/7/18', price: '$59.99' },
  { image: require('../../asset/images/best15.avif'), heading: 'Little Strays', date: '11/15/24', price: '$19.99' },
  { image: require('../../asset/images/best16.jpg'), heading: 'Among Us', date: '12/15/20', price: '$5.00' },
];


const HomeBest = () => {
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
    <div className="homebest-container">
    <h1>Digital Best Sellers</h1>
    <div className="homebest_navigation">
    <button onClick={handlePrev} className="homebest_arrow homebest_left-arrow">
      &larr;
    </button>
    <div className="homebest-boxes">
      {visibleItems.map((item, index) => (
        <div className="homebest_box" key={index}>
          <img src={item.image} alt={item.heading} />
          <h4>{item.heading}</h4>
          <h5>{item.date}</h5>
          <p>{item.price}</p>
          <div className="homebest_box-footer">
            <h6>Nintendo Switch</h6>
            <FaHeart className="wishlist-icon" />
          </div>
        </div>
      ))}
    </div>
    <button onClick={handleNext} className="homebest_arrow homebest_right-arrow">
      &rarr;
    </button>
    </div>
  </div>
  );
}

export default HomeBest;
