import React from 'react';
import './ProductsList.css';

const ProductsList = ({ productHandlers, productsList }) => {
  return (
    <>
      <div className="products-list">
        {productsList.map((item) => {
          return (
            <div className="product-item" key={Math.random() * 1}>
              <img src={item.productImage} alt="product item" className="product-image" />
              <p className="product-name">{item.productName}</p>
              <p className="product-price">{item.productPrice} €</p>
              <button
                onClick={() => {
                  productHandlers('ADD_PRODUCT_CART', { name: item.productName });
                }}
                className="add-product-to-cart"
              >
                Add to cart
              </button>
              <button
                onClick={() => {
                  productHandlers('REMOVE_PRODUCT_CART', { name: item.productName });
                }}
                className="remove-product-to-cart"
              >
                Remove from the cart
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductsList;
