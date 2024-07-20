// src/components/Cart.js
import React from 'react';

const Cart = ({ cartItems }) => {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <p>{item.name}</p>
          <p>${item.price}</p>
          <button>Remove</button>
        </div>
      ))}
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Cart;
