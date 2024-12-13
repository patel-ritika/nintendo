import React, {useState, useEffect} from 'react';
import "../../asset/styles/shop/shopholiday.css";
import { FaHeart } from 'react-icons/fa';

const items = [
    { image: require('../../asset/images/holiday1.avif'), heading: 'Super Mario - Wintery Super-soft Socks',  price: '$9.99' },
    { image: require('../../asset/images/holiday2.avif'), heading: 'Super Mario - Wintery Blanket',  price: '$24.99' },
    { image: require('../../asset/images/holiday3.avif'), heading: 'Super Mario - Wintery Glass Mug',  price: '19.99' },
    { image: require('../../asset/images/holiday4.avif'), heading: 'Super Mario - Holiday Super Mario Mug',  price: '$29.99' },
    { image: require('../../asset/images/holiday5.avif'), heading: 'Super Mario - Green Argyle Sweatshirt', price: '$44.99' },
    { image: require('../../asset/images/holiday6.avif'), heading: 'Super Mario - Holiday Decorative Sweater', price: '$59.99' },
  ];
  

const ShopHoliday = () => {
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
    <div className="shopdigital-container">
        <h1>Holiday exclusives</h1>
        <div className="shopdigital_navigation">
        <button onClick={handlePrev} className="shopdigital_arrow shopdigital_left-arrow">
          &larr;
        </button>
        <div className="shopdigital-boxes">
          {visibleItems.map((item, index) => (
            <div className="shopdigital_box" key={index}>
              <img src={item.image} alt={item.heading} />
              <h4>{item.heading}</h4>
              <p>{item.price}</p>
              <div className="shopdigital_box-footer">
                <h6>Merchandise</h6>
                <FaHeart className="shopdigital_wishlist-icon" />
              </div>
            </div>
          ))}
        </div>
        <button onClick={handleNext} className="shopdigital_arrow shopdigital_right-arrow">
          &rarr;
        </button>
        </div>
      </div>
  );
}

export default ShopHoliday;
