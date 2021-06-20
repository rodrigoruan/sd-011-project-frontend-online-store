import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Cart from './pages/Cart';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ Home } />
      <Route path="/cart" component={ Cart } />
    </BrowserRouter>
  );
}

export default App;
