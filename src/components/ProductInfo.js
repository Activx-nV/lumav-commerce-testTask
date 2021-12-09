import React, { useState } from 'react';
import './ProductInfo.css';

const ProductInfo = ({ productHandlers, cartCounterState }) => {
  const [productImage, setProductImage] = useState('');
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const productSubmitHandler = (event) => {
    event.preventDefault();

    const productData = {
      productImage: productImage,
      productName: productName,
      productPrice: productPrice,
      quantity: 0,
    };
    productHandlers('ADD_PRODUCT_LIST', productData);
    setProductImage('');
    setProductName('');
    setProductPrice('');
  };

  const handleImageInputChange = (event) => {
    const { value } = event.target;
    setProductImage(value);
  };
  const handleNameInputChange = (event) => {
    const { value } = event.target;
    setProductName(value);
  };
  const handlePriceInputChange = (event) => {
    const { value } = event.target;
    setProductPrice(value);
  };

  return (
    <div className="product-info">
      <div className="product-form-section">
        <h2 className="form-title">Add product form</h2>
        <form className="product-form" onSubmit={productSubmitHandler}>
          <input
            type="text"
            value={productImage}
            onChange={handleImageInputChange}
            placeholder="Product image"
            required
          />
          <input
            type="text"
            value={productName}
            onChange={handleNameInputChange}
            placeholder="Product name"
            required
          />
          <input
            type="number"
            value={productPrice}
            onChange={handlePriceInputChange}
            placeholder="Product price"
            required
          />
          <button className="submit-product">Submit</button>
        </form>
      </div>
      <div className="products-cart-counter" type="submit">
        <p>Products in cart: {cartCounterState}</p>
      </div>
    </div>
  );
};

export default ProductInfo;
