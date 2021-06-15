import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, Cart } from './pages';
import * as api from './services/api';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      productList: [],
    };
  }

  componentDidMount() {
    api.getCategories();
  }

  render() {
    const { productList } = this.state;

    return (
      <>
        <header>Frontend Online Store</header>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => <Home productList={ productList } />} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </BrowserRouter>
        <footer>Feito pelo Grupo 14, o grupo brabo</footer>
      </>
    );
  }
}

export default App;
