import 'normalize.css';
import './App.css';
import ProductInfo from './components/ProductInfo/ProductInfo';
import ProductsList from './components/ProductsList/ProductsList';

function App() {
  return (
    <div className="products">
      <ProductInfo />

      {/*products are hardcoded right now to create a conception-*/}
      <ProductsList />
    </div>
  );
}

export default App;
