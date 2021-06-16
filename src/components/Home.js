import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Filtros from './Filtros';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Card from './Card';
import Input from './Input';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      category: 'MLB1384',
      products: [],
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.searchApi = this.searchApi.bind(this);
  }

  componentDidMount() {
    this.searchApi();
  }

  handleOnChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(({ [name]: value }));
    this.searchApi();
  }

  async searchApi() {
    const { query, category } = this.state;
    console.log(query, category);
    let products = await getProductsFromCategoryAndQuery(query, category);
    console.log(products.results);
    products = products.results.map(({ title, thumbnail, id, price }) => (
      { name: title, img: thumbnail, key: id, price }
    ));
    this.setState(products);
  }

  render() {
    const { query, products } = this.state;
    console.log(products);
    return (
      <div>
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <Input value={ query } onChange={ this.handleOnChange } />
        <Filtros onClick={ this.handleOnChange } />
        <Link to="/ShoppingCart">
          <button data-testid="shopping-cart-button" type="button">
            Carrinho de Compras
          </button>
        </Link>
        {
          products.map((product) => {
            const { key } = product;
            return <Card { ...product } key={ key } />;
          })
        }
      </div>
    );
  }
}
