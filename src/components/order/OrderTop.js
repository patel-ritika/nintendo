import React from 'react';
import "../../asset/styles/order/ordertop.css";

const OrderTop = () => {
  return (
    <div className="order-container">
      <h1>Track order status</h1>
      <h2>Order information</h2>

      <div className="form-group">
        <h4>Order number *</h4>
        <input type="text" placeholder="Order number" className="input-box" />
      </div>

      <div className="form-group">
        <h4>Billing Zip/postal code *</h4>
        <input
          type="text"
          placeholder="Billing Zip/postal code"
          className="input-box"
        />
      </div>

      <div className="form-group">
        <h4>Billing last name *</h4>
        <input
          type="text"
          placeholder="Billing last name"
          className="input-box"
        />
      </div>

      <button className="ordercontinue-button">Continue</button>
    </div>
  );
}

export default OrderTop;
