// components/ProductListing.js
import React from 'react';
import ProductCard from './ProductCard';
import './ProductListing.css';

// Import images
import airmax270 from '../images/nike1.jpg';
import airforce1 from '../images/nike2.jpg';
import dunklow from '../images/nike3.jpg';
import jordan1 from '../images/nike4.jpg';
import vaporfly from '../images/nike5.jpg';
import blazer from '../images/nike6.jpg';

function ProductListing() {
  // Array of Nike shoe products with imported images
  const products = [
    {
      id: 1,
      name: "Nike Air Max 270",
      image: airmax270,
      price: 150,
      inStock: true
    },
    {
      id: 2,
      name: "Nike Air Force 1",
      image: airforce1,
      price: 100,
      inStock: true
    },
    {
      id: 3,
      name: "Nike Dunk Low",
      image: dunklow,
      price: 110,
      inStock: false
    },
    {
      id: 4,
      name: "Nike Air Jordan 1",
      image: jordan1,
      price: 180,
      inStock: true
    },
    {
      id: 5,
      name: "Nike ZoomX Vaporfly",
      image: vaporfly,
      price: 250,
      inStock: false
    },
    {
      id: 6,
      name: "Nike Blazer Mid '77",
      image: blazer,
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