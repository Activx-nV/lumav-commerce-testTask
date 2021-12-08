import React from 'react';
import './ProductInfo.css';

const ProductInfo = () => {
  return (
    <div className="product-info">
      <div className="product-form-section">
        <h2 className="form-title">Add product form</h2>
        <form className="product-form">
          <input type="text" placeholder="Product image" />
          <input type="text" placeholder="Product name" />
          <input type="text" placeholder="Product price" />
          <button className="submit-product">Submit</button>
        </form>
      </div>
      <div className="products-cart-counter">
        <p>Products in cart: 0</p>
      </div>
    </div>
  );
};

export default ProductInfo;
