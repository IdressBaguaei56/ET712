// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      // If item exists, increase quantity
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
      console.log('Increased quantity for:', product.name);
    } else {
      // If new item, add with quantity 1
      setCart([...cart, { ...product, quantity: 1 }]);
      console.log('Added to cart:', product.name);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
    console.log('Removed from cart, item id:', id);
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(id);
    } else {
      setCart(cart.map(item => 
        item.id === id 
          ? { ...item, quantity: newQuantity }
          : item
      ));
    }
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <div>
            <Link to="/">Products</Link>
            <Link to="/cart">Cart ({getTotalItems()})</Link>
          </div>
        </nav>
        
        <Routes>
          <Route 
            path="/" 
            element={<ProductList addToCart={addToCart} />} 
          />
          <Route 
            path="/cart" 
            element={<Cart cartItems={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;