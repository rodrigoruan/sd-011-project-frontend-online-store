import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as Api from '../services/api';
import ProductList from '../components/ProductList';
import CategoryList from '../components/CategoryList';
import '../styles/Home.css';
import 'bulma/css/bulma.min.css';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      search: '',
      category: '',
    };

    this.handleInput = this.handleInput.bind(this);
    this.HandlerState = this.HandlerState.bind(this);
    this.RequestApi = this.RequestApi.bind(this);
  }

  handleInput({ keyCode }) {
    const enterKeyCode = 13;

    if (keyCode === enterKeyCode) {
      this.RequestApi();
    }
  }

  HandlerState(event) {
    const { target: { name, value } } = event;
    if (name === 'category') {
      this.setState({ [name]: value }, () => this.RequestApi());
    } else {
      this.setState({ [name]: value });
    }
  }

  RequestApi() {
    const { search, category } = this.state;
    this.setState({ data: [] }, () => {
      Api.getProductsFromCategoryAndQuery(category, search)
        .then(({ results }) => {
          this.setState({ data: results });
        });
    });
  }

  render() {
    const { data } = this.state;
    const { cartList } = this.props;
    const cartSize = cartList.reduce((acc, { quantity }) => acc + quantity, 0);
    return (
      <div>
        <div className="searchSection">
          <CategoryList
            handleUserInput={ this.HandlerState }
          />
          <div className="searchBar search-size-2">
            <label htmlFor="search">
              <input
                className="input is-primary"
                placeholder="Digite Aqui o Termo para pesquisa"
                data-testid="query-input"
                type="text"
                name="search"
                onKeyUp={ this.handleInput }
                onChange={ this.HandlerState }
              />
            </label>
            <button
              className="button is-primary search-button"
              data-testid="query-button"
              type="submit"
              onClick={ this.RequestApi }
            >
              Pesquisar
            </button>
          </div>
          <div className="search-size-1">
            <Link
              className="button is-link"
              to="/cart"
              data-testid="shopping-cart-button"
            >
              {`Carrinho ${cartSize}`}
            </Link>
          </div>
        </div>
        <h2 className="home-message" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <ProductList addToCart={ this.addToCart } productsList={ data } />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cartList: state.cartReducer.cartList,
});

export default connect(mapStateToProps, null)(Home);

Home.propTypes = {
  cartList: PropTypes.shape,
}.isRequired;
