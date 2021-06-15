import React from 'react';
import './App.css';
import ShoppingCart from './Pages/ShoppingCart';
import Search from './component/Search';
import Filter from './component/Filter';

function App() {
  return (
    <div className="App">
      <Search />
      <ShoppingCart />
      <Filter />
    </div>
  );
}

export default App;
