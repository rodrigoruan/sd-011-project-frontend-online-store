import React from 'react';
import { Link } from 'react-router-dom';
import CategoryFilter from './CategoryFilter';
import ProductCard from './ProductCard';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Loading from './Loading';

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      query: '',
      id: '',
      product: false,
      noItems: [],
    };
    this.handleState = this.handleState.bind(this);
    this.SearchText = this.SearchText.bind(this);
  }

  handleState({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  SearchText() {
    const { query, id, product, noItems } = this.state;
    getProductsFromCategoryAndQuery(query, id).then(({ results }) => {
      if (results.lenght === 0) {
        this.setState({
          product: true,
        });
      }
      this.setState({
        noItems: results,
      });
    });
  }

  render() {
    const { noItems, product } = this.state;
    return (
      <div>
        <CategoryFilter onClick={ this.handleState } value="categories" />
        <label htmlFor="busca">
          <input
            name="inputText"
            data-testid="query-input"
            type="text"
            placeholder="Faça sua pesquisa"
            onChange={ this.handleState }
          />
          <button
            type="button"
            data-testid="query-button"
            onClick={ this.SearchText }
          >
            Buscar
          </button>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </label>
        <nav>
          <Link data-testid="shopping-cart-button" to="/shoppingcart">
            Carrinho
          </Link>
          <p>
            { noItems ? <Loading />
              : product.map(({ ...props }, index) => <ProductCard key={ index } { ...props } />)}
          </p>
        </nav>
      </div>
    );
  }
}
