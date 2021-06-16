import React from 'react';
import ShoppingCart from './ShoppingCart';
import Categories from './Categories';
import style from './Home.module.css';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      products: null,
      search: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { value } = document.querySelector('input');
    const id = getCategories()
      .then((json) => json.id);
    getProductsFromCategoryAndQuery(id, value)
      .then((json) => this.setState({
        products: json.results,
        search: true,
      }));
  }

  render() {
    const { products, search } = this.state;
    return (
      <div className={ style.inputContent }>
        <label htmlFor="site-search">
          <input
            data-testid="query-input"
            type="search"
            id="site-search"
          />
        </label>

        <button
          id="search-button"
          type="button"
          data-testid="query-button"
          onClick={ this.handleClick }
        >
          Busca
        </button>
        <br />
        <ShoppingCart />
        <span data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </span>
        <Categories />
        {products && products.map((product) => (
          <div key={ product.id } data-testid="product">
            <img src={ product.thumbnail } alt="foto-produto" />
            <h2>{product.title}</h2>
            <p>{product.price}</p>
          </div>))}
        {search && products.length === 0 && <p>Nenhum produto encontrado</p>}
      </div>
    );
  }
}

export default Home;
