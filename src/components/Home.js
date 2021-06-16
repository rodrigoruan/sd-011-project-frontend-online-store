import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import NoFoundProducts from './NoFoundProducts';
import Card from './Card';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      api: [],
      products: [],
      noFindProducts: false,
      inputText: false,
      category: false,
    };
  }

  componentDidMount() {
    getCategories().then((response) => this.setState({ api: response }));
  }

  handle = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSearch = () => {
    const { inputText, category } = this.state;
    getProductsFromCategoryAndQuery(category, inputText, false)
      .then(({ results }) => {
        if (results.lenght === 0) this.setState({ noFindProducts: true });
        else this.setState({ products: results });
      });
  }

  changeCategory = () => {
    const { category } = this.state;
    getProductsFromCategoryAndQuery(category, false, false)
      .then(({ results }) => {
        if (results.lenght === 0) this.setState({ noFindProducts: true });
        else this.setState({ products: results });
      });
  }

  render() {
    const { api, products, noFindProducts } = this.state;
    if (!api) return <p>carregando...</p>;
    return (
      <div>
        <select
          onChange={ this.handle }
          onClick={ this.changeCategory }
          name="category"
        >
          <option data-testid="category"> Selecione uma Categoria</option>
          {api.map(({ id, name }) => (
            <option
              data-testid="category"
              key={ id }
              value={ id }
            >
              {name}
            </option>
          ))}
        </select>
        <input
          name="inputText"
          data-testid="query-input"
          type="text"
          placeholder="digite aqui"
          onChange={ this.handle }
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.handleSearch }
        >
          Buscar
        </button>
        <Link data-testid="shopping-cart-button" to="cart">
          Carrinho
        </Link>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        {
          noFindProducts ? <NoFoundProducts />
            : products
              .map(({ ...props }, index) => <Card key={ index } { ...props } />)
        }
      </div>
    );
  }
}
