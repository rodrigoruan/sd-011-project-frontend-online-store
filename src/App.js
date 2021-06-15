import React from 'react';
import './App.css';
import ShoppingCart from './Pages/ShoppingCart';
import Search from './component/Search';
import Categorys from './component/Categorys';
import Cards from './component/Cards';

function App() {
  return (
    <div className="App">
      <Search />
      <ShoppingCart />
      <Cards />
      <Categorys />
    </div>
  );
}

export default App;
