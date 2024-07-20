// src/components/ProductList.js
import React, { useState } from 'react';
import Product from './Product';

const ProductList = ({ products }) => {
  const [view, setView] = useState('grid');

  return (
    <div>
      <div className="view-toggle">
        <button onClick={() => setView('grid')}>Grid View</button>
        <button onClick={() => setView('list')}>List View</button>
      </div>
      <div className={`product-list ${view}`}>
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
