import React from 'react';
import './App.css';
import * as api from './services/api';

function App() {
  api.getCategories().then((categorie) => console.log(categorie));
  api.getProductsFromCategoryAndQuery('MLB5672', 'Biela').then((cat) => console.log(cat));
  return (
    <div className="App">
      <h1> Aqui</h1>
    </div>
  );
}

export default App;
