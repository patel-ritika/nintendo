import React, {useState, useEffect} from 'react';
import "../../asset/styles/shop/shopmulti.css";
import { FaHeart } from 'react-icons/fa';

const items = [
    { image: require('../../asset/images/multi1.avif'), heading: 'REMATCH Wireless Controller Glow:Super Mario Star',  price: '$44.99' },
    { image: require('../../asset/images/multi2.jpg'), heading: 'Nintendo Switch Travel Case Glow-Super Star',  price: '$19.99' },
    { image: require('../../asset/images/multi3.avif'), heading: 'REMATCH Wireless Controller Glow:Super Mario Icon',  price: '44.99' },
    { image: require('../../asset/images/multi4.avif'), heading: 'Nintendo Switch Travel Case Glow-Mario Icon',  price: '$19.99' },
    { image: require('../../asset/images/multi5.avif'), heading: 'REMATCH Wireless Controller Glow:Link Hero', price: '$54.99' },
    { image: require('../../asset/images/multi6.avif'), heading: 'REMATCH Wired Controller Glow:Sheikah Shoot', price: '$27.99' },
    { image: require('../../asset/images/multi7.webp'), heading: 'REMATCH Wired Controller:Mario Escape', price: '$27.99' },
    { image: require('../../asset/images/multi8.avif'), heading: 'Nintendo Switch Travel Case-Mario Escape', price: '$19.99' },
    { image: require('../../asset/images/multi9.webp'), heading: 'Wireless Controller for Nintendo Switch-Kirby...', price: '$44.99' },
    { image: require('../../asset/images/multi10.jpg'), heading: 'Travel Pro Slim Case for Nintendo Switch Systems...', price: '$24.99' },
    { image: require('../../asset/images/multi11.jpeg'), heading: 'Afterglow Wave Wireless LED Controller for Nintendo...', price: '$44.99' },
    { image: require('../../asset/images/multi12.jpg'), heading: 'Enhanced Wired Controller for Nintendo Switch...', price: '$27.99' },
    { image: require('../../asset/images/multi13.avif'), heading: 'Rock Candy Wired Controller:Timmy and Tommy Nook', price: '$22.99' },
    { image: require('../../asset/images/multi14.avif'), heading: 'Slim Case for Nintendo Switch Systems-Animal...', price: '$14.99' },
  ];

const ShopMulti = () => {
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
   <div className="shopmulti-container">
           <h1>Multiplayer accessories</h1>
           <div className="shopmulti_navigation">
           <button onClick={handlePrev} className="shopmulti_arrow shopmulti_left-arrow">
             &larr;
           </button>
           <div className="shopmulti-boxes">
             {visibleItems.map((item, index) => (
               <div className="shopmulti_box" key={index}>
                 <img src={item.image} alt={item.heading} />
                 <h4>{item.heading}</h4>
                 <p>{item.price}</p>
                 <div className="shopmulti_box-footer">
                   <h6>Hardware</h6>
                   <FaHeart className="shopmulti_wishlist-icon" />
                 </div>
               </div>
             ))}
           </div>
           <button onClick={handleNext} className="shopmulti_arrow shopmulti_right-arrow">
             &rarr;
           </button>
           </div>
         </div>
  );
}

export default ShopMulti;
