// src/components/ProductList.js
import React from 'react';

const products = [
  { id: 1, name: 'Product A', price: 29.99 },
  { id: 2, name: 'Product B', price: 49.99 },
  { id: 3, name: 'Product C', price: 19.99 }
];

function ProductList({ addToCart }) {
  return (
    <div className="container">
      <h2>Products</h2>
      <div className="products">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
