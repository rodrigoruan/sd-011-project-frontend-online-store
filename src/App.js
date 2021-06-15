import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './home';
import './App.css';
import './services/api'
import listproductterms from './components/listproductterms'
// import * as api from './services/api'

function App() {
  // api.getCategories().then(categories => { console.log(categories) })
  // api.getProductsFromCategoryAndQuery('MLB5672', 'Farol').then(categories => { console.log(categories) })
  return (
    <div className="App">
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        <p>Edit src/App.js and save to reload.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        
        </a>
      </header>
    </div>
  );
}

export default App;
