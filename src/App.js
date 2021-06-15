import React from 'react';
import './App.css';
import * as api from './services/api';

function App() {
  api.getProductsFromCategoryAndQuery('MLB1055', 'celular');
  return (
    <div>
      <p>Oi</p>
    </div>
  );
}

export default App;
