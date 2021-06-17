//Cart
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      count: 0,
    };
  }

  render() {
    const { location: { aboutProps: { itensCarrinho } } } = this.props;
    return (
      <div>
        <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>
        { itensCarrinho.map((element) => (
          <div key={ element.id }>
            <h3>{ element.id }</h3>
            <h5 data-testid="shopping-cart-product-name">{ element.title }</h5>
            <span>{ element.price }</span>
          </div>)) }
      </div>
    );
  }
}

export default Cart;

Cart.propTypes = {
  location: PropTypes.shape({
    aboutProps: PropTypes.shape({
      itensCarrinho: PropTypes.arrayOf,
    }),
  }),
}.isRequired;

//Product
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Product extends Component {
  render() {
    const { title, thumbnail, price, id, addCart } = this.props;
    return (
      <div data-testid="product">
        <img src={ thumbnail } alt={ title } />
        <h3>{title}</h3>
        <p>{`R$ ${price}`}</p>
        <button
          data-testid="product-add-to-cart"
          type="button"
          onClick={ addCart }
          name={ title }
          value={ price }
          id={ id }
        >
          ADICIONAR AO CARRINHO
        </button>
        <Link
          to={ {
            pathname: `/details/${id}`,
            aboutProps: {
              name: title,
              image: thumbnail,
              preco: price,
            },
          } }
          data-testid="product-detail-link"
        >
          Mais detalhes
        </Link>
      </div>
    );
  }
}

Product.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.string,
}.isRequired;

export default Product;

//SideBar
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SideBar extends Component {
  render() {
    const { categories, onChangeHandler } = this.props;
    return (
      <aside>
        <ul>
          { categories.map((category) => (
            <label htmlFor="category" key={ category.id }>
              { category.name }
              <input
                type="radio"
                name="category"
                data-testid="category"
                value={ category.id }
                onChange={ onChangeHandler }
              />
            </label>
          ))}
        </ul>
      </aside>
    );
  }
}

SideBar.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChangeHandler: PropTypes.func.isRequired,
};

//Home
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SideBar from '../components/SideBar';
import * as api from '../services/api';
import SearchBar from '../components/SearchBar';
import Product from '../components/Product';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      category: '',
      isNotFound: false,
      isUpdated: false,
      product: '',
      productsArray: [],
      itensCart: [],
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.requestCategories = this.requestCategories.bind(this);
    this.requestProducts = this.requestProducts.bind(this);
    this.addCart = this.addCart.bind(this);
  }

  componentDidMount() {
    this.requestCategories();
  }

  componentDidUpdate() {
    const { isUpdated } = this.state;
    if (isUpdated) {
      this.requestProducts();
    }
  }

  onChangeHandler({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
      isUpdated: true,
    });
  }

  async requestCategories() {
    const categories = await api.getCategories();
    this.setState({
      categories,
    });
  }

  async requestProducts() {
    const { category, product } = this.state;
    const products = await api.getProductsFromCategoryAndQuery(category, product);
    const productsArray = products.results;
    if (!products) {
      this.setState({
        isNotFound: true,
        productsArray: [],
        isUpdated: false,
      });
      return;
    }
    this.setState({
      productsArray,
      isNotFound: false,
      isUpdated: false,
    });
  }

  addCart({ target }) {
    const { itensCart } = this.state;
    const newObject = { title: target.name, price: target.value, id: target.id };
    const accumulator = [...itensCart, newObject];
    this.setState({
      itensCart: accumulator,
    });
  }

  render() {
    const { categories, isNotFound, product, productsArray, itensCart } = this.state;
    if (isNotFound) {
      return <div>Nenhum produto foi encontrado</div>;
    }
    return (
      <div>
        <Link
          to={ {
            pathname: '/cart',
            aboutProps: {
              itensCarrinho: itensCart,
            },
          } }
          itemCart={ itensCart }
          data-testid="shopping-cart-button"
        >
          Carrinho
        </Link>
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <SearchBar
          onChangeHandler={ this.onChangeHandler }
          product={ product }
          requestProducts={ this.requestProducts }
        />
        <SideBar
          categories={ categories }
          onChangeHandler={ this.onChangeHandler }
        />
        { productsArray.map((element) => (
          <Product
            key={ element.id }
            id={ element.id }
            title={ element.title }
            thumbnail={ element.thumbnail }
            price={ element.price }
            addCart={ this.addCart }
          />
        ))}
      </div>
    );
  }
}


//App

import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as api from './services/api';
