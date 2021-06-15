import React from 'react';
import './App.css';
import * as Data from './services/api';

function App() {
  return (
    <div className="App">
      {console.log(Data.getCategories())}
      {console.log(Data.getProductsFromCategoryAndQuery())}
    </div>
  );
}

export default App;
