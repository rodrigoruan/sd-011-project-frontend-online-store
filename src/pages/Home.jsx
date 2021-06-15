import React, { Component } from 'react';
import * as Api from '../services/api';
import ProductList from '../components/productlist';
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
      </div>
    );
  }
}

export default Home;
