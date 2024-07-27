import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { removeFromCart, adjustQuantity } from '../actions/cartActions';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleRemove = id => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id, quantity) => {
    dispatch(adjustQuantity(id, quantity));
  };

  return (
    <CartContainer>
      <h2>Your Cart</h2>
      {cart.items.length === 0 ? (
        <p>Your cart is empty. <Link to="/">Go shopping</Link></p>
      ) : (
        <CartList>
          {cart.items.map(item => (
            <CartItem key={item._id}>
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>${item.price}</p>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item._id, e.target.value)}
                />
                <button onClick={() => handleRemove(item._id)}>Remove</button>
              </div>
            </CartItem>
          ))}
        </CartList>
      )}
      <CartSummary>
        <h3>Total: ${cart.total}</h3>
        <Link to="/checkout">Proceed to Checkout</Link>
      </CartSummary>
    </CartContainer>
  );
};

const CartContainer = styled.div`
  padding: 2rem;
`;

const CartList = styled.div`
  display: flex;
  flex-direction: column;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  img {
    max-width: 100px;
    margin-right: 1rem;
  }
  div {
    display: flex;
    flex-direction: column;
    input {
      margin-bottom: 0.5rem;
    }
  }
`;

const CartSummary = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    display: inline-block;
    padding: 0.5rem 1rem;
    background-color: #333;
    color: #fff;
    text-decoration: none;
  }
`;

export default Cart;
