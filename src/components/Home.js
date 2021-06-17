import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  getCategories,
  getProductsFromCategoryAndQuery,
} from '../services/api';
import NoFoundProducts from './NoFoundProducts';
import Card from './Card';
import '../css/Home.css';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      api: [],
      products: [],
      noFindProducts: false,
      inputText: false,
      category: false,
      sum: 0,
    };
  }

  componentDidMount() {
    getCategories().then((response) => this.setState({ api: response }));
    this.sumCartItems();
  }

  handle = ({ target }) => this.setState({ [target.name]: target.value });

  handleSearch = () => {
    const { inputText, category } = this.state;

    getProductsFromCategoryAndQuery(category, inputText).then(({ results }) => (
      results.length === 0
        ? this.setState({ noFindProducts: true })
        : this.setState({ products: results })));
  };

  changeCategory = () => {
    const { category } = this.state;

    getProductsFromCategoryAndQuery(category, false).then(({ results }) => (
      !results.length
        ? this.setState({ noFindProducts: true })
        : this.setState({ products: results })));
  };

  sumCartItems = () => {
    const objeto = { ...localStorage };
    const objJson = Object.values(objeto).map((e) => JSON.parse(e));
    const total = objJson.reduce((acc, curr) => acc + curr.counter, 0);
    this.setState({ sum: total });
  }

  render() {
    const { api, products, noFindProducts, category, inputText, sum } = this.state;
    if (!api) return <h1>carregando...</h1>;
    return (
      <>
        <div className="container">
          <select
            className="select"
            onChange={ this.handle }
            onClick={ this.changeCategory }
            name="category"
          >
            <option> Selecione uma Categoria</option>
            {api.map(({ id, name }) => (
              <option data-testid="category" key={ id } value={ id }>
                {name}
              </option>
            ))}
          </select>

          <div className="search-input">
            <input
              className="input-text"
              name="inputText"
              data-testid="query-input"
              type="text"
              placeholder="Digite aqui"
              onChange={ this.handle }
            />
            <button
              className="button"
              type="button"
              data-testid="query-button"
              onClick={ this.handleSearch }
            >
              Buscar
            </button>
          </div>

          <Link className="cart" data-testid="shopping-cart-button" to="cart">
            Carrinho 🛒
            <span data-testid="shopping-cart-size">
              { sum }
            </span>
          </Link>
        </div>

        {!category && !inputText && (
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        )}

        <div className="cards-container">
          {noFindProducts ? (<NoFoundProducts />) : (products
            .map(({ ...props }, index) => (
              <Card key={ index } { ...props } sumCartItems={ this.sumCartItems } />))
          )}
        </div>
      </>
    );
  }
}
