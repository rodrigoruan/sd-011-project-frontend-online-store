import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import ListProducts from './pages/ListProducts';
import ShopingCart from './pages/ShopingCart';
// import * as api from './services/api';
import MainPage from './Components/MainPage';

function App() {
  return (

    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/" component={ MainPage } /> */}
        <Route exact path="/" render={ () => <ListProducts /> } />
        <Route exact path="/shoppingCart" render={ () => <ShopingCart /> } />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
