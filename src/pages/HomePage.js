// src/pages/HomePage.js
import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import SearchBar from '../components/SearchBar';

const HomePage = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-page">
      <SearchBar onSearch={setSearchTerm} />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default HomePage;
