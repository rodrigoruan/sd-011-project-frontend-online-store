import React from 'react';
import './App.css';
import Home from './Pages/Home';
import ShoppingCartButton from './Pages/ShoppingCartButton';
import ShoppingCart from './Pages/ShoppingCart';

class App extends React.Component {
  render() {
    return (
      <div>
        <Home />
        <ShoppingCartButton />
        <ShoppingCart />
      </div>);
  }
}

export default App;
