import React, { Component } from 'react';
import * as Api from '../services/api';
import ProductList from '../components/productlist';
import CategoryList from '../components/CategoryList';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      Result: {},
      search: " "
    };

    this.HandlerState = this.HandlerState.bind(this);
    this.RequestApi = this.RequestApi.bind(this);
  }
  
  HandlerState(event) {
    const { target: { value } } = event;
    this.setState({search: value})
  }
  
  RequestApi() {
    const { search } = this.state;
    const products = Api.getProductsFromCategoryAndQuery("", search);
    this.setState((state)=> ({
      Result: products 
     }))
  }

  render() {
   
    return (
      <div>
        <label htmlFor="search">
          <input type="text" name="search" onChange={this.HandlerState}/>
        </label>
        <button type="submit" onClick={this.RequestApi}>Pesquisar</button>
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <ProductList />
        <Link to="/cart" data-testid="shopping-cart-button">Carrinho</Link>
        <CategoryList />

      </div>
    );
  }
}

export default Home;
