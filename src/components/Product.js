import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Product = ({ product }) => {
  return (
    <ProductCard>
      <Link to={`/product/${product._id}`}>
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>${product.price}</p>
      </Link>
    </ProductCard>
  );
};

const ProductCard = styled.div`
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
  img {
    max-width: 100%;
    height: auto;
  }
  h3 {
    margin: 0.5rem 0;
  }
  p {
    color: #333;
  }
`;

export default Product;
