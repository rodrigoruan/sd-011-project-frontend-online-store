import React from 'react';
import './App.css';
import * as api from './services/api';

function App() {
  api.getProductsFromCategoryAndQuery().then((categories) => { console.log(categories); });
  return (
    <div className="App">
      olá
    </div>
  );
}

export default App;
