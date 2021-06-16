import React from 'react';
import { Link } from 'react-router-dom';
import CardItem from './CardItem';
import Category from './Category';
import * as api from '../services/api';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      inputProduct: '',
      response: [],
    };

    this.catchText = this.catchText.bind(this);
    this.requestButton = this.requestButton.bind(this);
  }

  catchText({ target }) {
    const { value } = target;
    this.setState({
      inputProduct: value,
    });
  }

  async requestButton() {
    const { inputProduct } = this.state;
    const request = await api.getProductsFromCategoryAndQuery(undefined, inputProduct);
    this.setState({
      response: request.results,
    });
  }

  render() {
    console.log('Render Home');
    const { response } = this.state;
    return (
      <div className="main-page">
        <Category />
        <div>
          <div>
            <form className="search-bar">
              <label htmlFor="queryInput" data-testid="home-initial-message">
                Digite algum termo de pesquisa ou escolha uma categoria.
                <input data-testid="query-input" id="queryInput" onChange={this.catchText} />
              </label>
            </form>
            <button type="button" onClick={ this.requestButton } data-testid="query-button"> Pesquisa </button>
            <Link to="/carrinho" data-testid="shopping-cart-button">
              Carrinho de compras 🛒
            </Link>
          </div>
          <CardItem products={ response } />
        </div>
      </div>
    );
  }
}

export default Home;
