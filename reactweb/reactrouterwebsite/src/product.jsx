import React from 'react';
import './App.css'; 
const Product = ({ productName, price, productImage, productDescription }) => {
  return (
    <div className='product-card'>
      <img src={productImage} alt={productName} className='product-image' />
      <h2>{productName}</h2>
      <p><strong>Price:</strong> ₹{price}</p>
      <p >{productDescription}</p>
    </div>
  );
};

export default Product;
