import 'normalize.css';
import './App.css';

function App() {
  return (
    <div className="products">
      <div className="product-info">
        <div className="product-form-section">
          <h2>Add product form</h2>
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

      {/*products are hardcoded right now to create a conception-*/}
      <div className="products-list">
        <div className="product-item">
          <img src="img-url-state-will-be-here" alt="product item" />
          <div>Product name</div>
          <div>Product price</div>
          <button className="add-product-to-cart">Add to cart</button>
          <button className="remove-product-to-cart">Remove from the cart</button>
        </div>
      </div>
    </div>
  );
}

export default App;
