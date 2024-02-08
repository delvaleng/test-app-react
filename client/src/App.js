import './App.css';
import Products from './components/form/Products';
import 'bootstrap/dist/css/bootstrap.min.css'
import Categories from './components/form/Categories';
import ListProducts from './components/ListProducts';
import SelectCategory from './components/SelectCategory';

function App() {
  return (
    <div className="App">
      {/* <SelectCategory/> */}
      {/* <Products/> */}
      <ListProducts/>
      {/* <Categories/> */}
    </div>
  );
}

export default App;
