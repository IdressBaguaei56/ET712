// src/components/Cart.js
import React from 'react';
import { Link } from 'react-router-dom';

function Cart({ cartItems, removeFromCart, updateQuantity }) {
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (cartItems.length === 0) {
    return (
      <div className="container">
        <h2>Your Cart</h2>
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <Link to="/" className="continue-shopping">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cartItems.map(item => (
          <div className="cart-item" key={item.id}>
            <div className="item-info">
              <h3>{item.name}</h3>
              <p className="item-price">${item.price} each</p>
            </div>
            <div className="quantity-controls">
              <button 
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="quantity-btn"
              >
                -
              </button>
              <span className="quantity">{item.quantity}</span>
              <button 
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="quantity-btn"
              >
                +
              </button>
            </div>
            <div className="item-total">
              <p>${(item.price * item.quantity).toFixed(2)}</p>
            </div>
            <button 
              onClick={() => removeFromCart(item.id)}
              className="remove-btn"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <div className="total">
          <span>Total: ${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

export default Cart;