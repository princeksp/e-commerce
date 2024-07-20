// src/components/Checkout.js
import React from 'react';

const Checkout = () => {
  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form>
        <div>
          <label>Card Number</label>
          <input type="text" />
        </div>
        <div>
          <label>Expiration Date</label>
          <input type="text" />
        </div>
        <div>
          <label>CVV</label>
          <input type="text" />
        </div>
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default Checkout;
