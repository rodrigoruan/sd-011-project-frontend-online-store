import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import './css/searchlist.css';
import './css/home.css';
import * as api from './services/api';
import {
  About,
  SearchBar,
  SearchList,
  Header,
  Footer,
  NotFound,
  ShoppingCart,
  Categories,
  Home,
} from './pages/index';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: '',
    };

    this.getSearchQuery = this.getSearchQuery.bind(this);
  }

  componentDidMount() {
    api.getCategories();
    api.getProductsFromCategoryAndQuery();
  }

  getSearchQuery = (value) => {
    this.setState({ searchQuery: value });
  };

  render() {
    return (
      <>
        <Header />
        <Switch>
          {/* prettier-ignore */}
          <Route exact path="/" render={(props) => <Home {...props}  sendSubmit={this.getSearchQuery}/>}  />
          {/* prettier-ignore */}
          <Route exact path="/search/:id" render={(props) => 
          (<SearchList {...props} sendSubmit={this.getSearchQuery} product={this.state.searchQuery}/>)} />
          <Route exact path="/cart" render={(props) => <ShoppingCart {...props} />} />
          <Route path="/about" component={About} exact />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </>
    );
  }
}
