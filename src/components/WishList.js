import React from 'react';
import "../asset/styles/wishlist.css";

const WishList = () => {
  return (
    <div className="wishlist-container">
      <h1>Wish List</h1>
      <p>
      Explore, purchase, or remove items from your Wish List here. You can also share your current list with <br/>friends and family.
      </p>
      <div className="wishlist-box">
        <h2>Please log in to your Nintendo Account to view your Wish List.</h2>
        <button className="login-button">Log in or Create an account</button>
      </div>
    </div>
  );
}

export default WishList;
