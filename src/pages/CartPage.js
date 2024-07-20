// src/pages/CartPage.js
import React from 'react';
import Cart from '../components/Cart';

const CartPage = ({ cartItems }) => {
  return (
    <div className="cart-page">
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default CartPage;
