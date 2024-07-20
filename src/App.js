// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';

const App = () => {
  const [products] = useState([
    { id: 1, name: 'Product 1', price: 50, image: 'link-to-image' },
    { id: 2, name: 'Product 2', price: 30, image: 'link-to-image' },
    // Add more products here
  ]);

  const [cartItems, setCartItems] = useState([]);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage products={products} />} />
          <Route path="/cart" element={<CartPage cartItems={cartItems} />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
