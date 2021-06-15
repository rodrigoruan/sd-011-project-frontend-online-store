import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Categories from './Categories';
import SearchProduct from './SearchProduct';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchBar: '',
      mostrarProdutos: false,
    };
  }

  handleChange = ({ target }) => {
    const { value, name } = target;

    this.setState({
      [name]: value,
    });
  }

  showProducts = () => {
    this.setState({
      mostrarProdutos: true,
    });
  }

  render() {
    const { searchBar, mostrarProdutos } = this.state;
    return (
      <div>
        <label htmlFor="searchBar">
          <input
            type="text"
            onChange={ this.handleChange }
            value={ searchBar }
            name="searchBar"
            data-testid="query-input"
          />
        </label>
        <button
          type="button"
          onClick={ () => this.showProducts() }
          data-testid="query-button"
        >
          Pesquisar
        </button>
        <Link
          to="/shoppingcart"
          data-testid="shopping-cart-button"
        >
          Ir para o carrinho
        </Link>
        <Categories />
        <span data-testid="home-initial-message">
          {mostrarProdutos
            ? <SearchProduct searchBar={ searchBar } />
            : <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>}
        </span>
      </div>
    );
  }
}

export default Home;
