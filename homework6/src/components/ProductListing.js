// components/ProductListing.js
import React from 'react';
import ProductCard from './ProductCard';
import './ProductListing.css';

function ProductListing() {
  // Array of Nike shoe products
  const products = [
    {
      id: 1,
      name: "Nike Air Max 270",
      image: "https://example.com/images/airmax270.jpg",
      price: 150,
      inStock: true
    },
    {
      id: 2,
      name: "Nike Air Force 1",
      image: "https://example.com/images/airforce1.jpg",
      price: 100,
      inStock: true
    },
    {
      id: 3,
      name: "Nike Dunk Low",
      image: "https://example.com/images/dunklow.jpg",
      price: 110,
      inStock: false
    },
    {
      id: 4,
      name: "Nike Air Jordan 1",
      image: "https://example.com/images/jordan1.jpg",
      price: 180,
      inStock: true
    },
    {
      id: 5,
      name: "Nike ZoomX Vaporfly",
      image: "https://example.com/images/vaporfly.jpg",
      price: 250,
      inStock: false
    },
    {
      id: 6,
      name: "Nike Blazer Mid '77",
      image: "https://example.com/images/blazer.jpg",
      price: 105,
      inStock: true
    }
  ];

  return (
    <div className="product-listing-container">
      <h1>Nike Shoes Collection</h1>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
            inStock={product.inStock}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductListing;