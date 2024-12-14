import React from 'react';
import "../asset/styles/cart.css";
import { FaShoppingCart } from "react-icons/fa";

const Cart = () => {
  return (
    <div className="cart-container">
      <h1 className="cart-title">Shopping Cart</h1>
      <div className="cart-icon-container">
        <FaShoppingCart className="cart-icon" />
      </div>
      <h2 className="cart-subtitle">
        Your cart looks lonely. Why not add <span className="underline">something fun</span>?
      </h2>
      <p className="cart-text">
        Unlock free shipping when you spend <strong>$50</strong> or more!
      </p>
    </div>
  );
}

export default Cart;
