import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './home';
import './App.css';
import Listproductterms from './components/listProductTerms'
import * as api from './services/api'

function App() {
  // api.getCategories().then(categories => { console.log(categories) })
  // api.getProductsFromCategoryAndQuery('MLB5672', 'Farol').then(categories => { console.log(categories) })
  return (
    <div>
    <div>
    <Listproductterms />
    </div>
    <BrowserRouter>
      <Route>
        <Home path="/" />
      </Route>
    </BrowserRouter>
    </div>
  );
}

export default App;
