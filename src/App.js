import React, { useState } from 'react';
import 'normalize.css';
import './App.css';
import ProductInfo from './components/ProductInfo';
import ProductsList from './components/ProductsList';

const App = () => {
  const ADD_PRODUCT_LIST = 'ADD_PRODUCT_LIST';
  const ADD_PRODUCT_CART = 'ADD_PRODUCT_CART';
  const REMOVE_PRODUCT_CART = 'REMOVE_PRODUCT_CART';
  const [initialProductsState, setInitialProductsState] = useState([]);
  const [initialCounterState, setInitialCounterState] = useState(0);

  const productsListReducer = (actionType, payload) => {
    switch (actionType) {
      case ADD_PRODUCT_LIST:
        setInitialProductsState([...initialProductsState, payload]);
        break;

      case ADD_PRODUCT_CART:
        setInitialCounterState(initialCounterState + 1);
        const filterProductTargetIncrement = initialProductsState.map((product) => {
          if (product.productName === payload.name) {
            return { ...product, quantity: product.quantity + 1 };
          } else {
            return product;
          }
        });
        setInitialProductsState(filterProductTargetIncrement);
        break;

      case REMOVE_PRODUCT_CART:
        const filterProductTargetDecrement = initialProductsState.filter(
          (product) => product.productName === payload.name
        );
        if (filterProductTargetDecrement[0].quantity <= initialCounterState) {
          setInitialCounterState(initialCounterState - filterProductTargetDecrement[0].quantity);
        }

        const filterRemovedProduct = initialProductsState.filter(
          (product) => product.productName !== payload.name
        );
        setInitialProductsState(filterRemovedProduct);
        break;

      default:
        setInitialProductsState(initialProductsState);
        break;
    }
  };

  return (
    <div className="products">
      <ProductInfo productHandlers={productsListReducer} cartCounterState={initialCounterState} />

      <ProductsList
        productHandlers={productsListReducer}
        cartCounterState={initialCounterState}
        productsList={initialProductsState}
      />
    </div>
  );
};

export default App;
