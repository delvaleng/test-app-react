import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ProductIndex from './components/ProductIndex';
import Products from './components/form/Products';
import Categories from './components/form/Categories'
import React, { useState } from 'react'


function App() {

  return (
    <div className="App">
      <ProductIndex/>

      
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <Products/>
          </div>
          <div className='col-12'>
            <Categories />
          </div>
        </div>
      </div>


    </div>
  );
}

export default App;
