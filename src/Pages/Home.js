import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartSize from '../Components/ShoppingCartSize';
import * as Data from '../services/api';
import RadialButton from '../Components/RadialButton';
import CardProduct from '../Components/CardProduct';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      id: '',
      value: '',
      searchProducts: [],
      searchCategory: [],
      loading: true,
      cartProducts: [],
    };
    this.getProducts = this.getProducts.bind(this);
    this.getProductById = this.getProductById.bind(this);
    this.getValue = this.getValue.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getProductsFromCategory = this.getProductsFromCategory.bind(this);
    this.addCart = this.addCart.bind(this);
    this.addCartProducts = this.addCartProducts.bind(this);
  }

  componentDidMount() {
    this.getProducts();
    const cartItem = JSON.parse(localStorage.getItem('cartItem'));
    if (cartItem !== null && cartItem.length > 0) {
      this.addCartProducts(cartItem);
    }
  }

  componentDidUpdate() {
    const { cartProducts } = this.state;
    localStorage.setItem('cartItem', JSON.stringify([...cartProducts]));
  }

  handleChange({ target }) {
    const { value } = target;
    this.setState({
      value,
    });
  }

  async getValue({ target: { value } }) {
    this.setState({
      id: value,
      searchProducts: await this.getProductsFromCategory(value),
    });
  }

  async getProducts() {
    const fetchApi = await Data.getCategories();
    this.setState({
      loading: false,
      categories: fetchApi,
    });
  }

  async getProductById() {
    const { id, value } = this.state;
    const fetchApi = await Data.getProductsFromCategoryAndQuery(id, value);
    this.setState({
      searchProducts: fetchApi.results,
    });
  }

  async getProductsFromCategory(id) {
    const products = await Data.getProductsFromCategoryAndQuery(id);
    return products.results;
  }

  addCart(product) {
    this.setState((old) => ({
      cartProducts: [...old.cartProducts, product],
    }));
  }

  addCartProducts(product) {
    this.setState(() => ({
      cartProducts: [...product],
    }));
  }

  render() {
    const {
      categories,
      searchProducts,
      searchCategory,
      loading,
      cartProducts,
    } = this.state;

    return (
      <div className="body">
        <header className="header">
          <div>
            <img src="./SVG/GRUPO 16.svg" alt="logo" />
            <img src="./SVG/Black and White Collection 12.svg" alt="logo" />
          </div>
          <Link
            to={ { pathname: '/shopcart', state: cartProducts } }
          >
            <button className="shopping" type="button" data-testid="shopping-cart-button">
              <img src="https://image.flaticon.com/icons/png/512/263/263142.png" alt="a" />
              <ShoppingCartSize shop={ cartProducts.length } />
            </button>
          </Link>

        </header>
        <div className="grupo-16">
          <h2>Ivaldo Souza</h2>
          <h2>Gabriel Pimentel Fernandes</h2>
          <h2>Guilherme Nunes</h2>
          <h2>Lucas Maestrelli</h2>
        </div>
        <label className="search-button" htmlFor="search">
          <input
            data-testid="query-input"
            onChange={ this.handleChange }
            placeholder="Digite algum termo de pesquisa ou escolha uma categoria."
            className="search"
            type="text"
          />
          <button
            data-testid="query-button"
            type="button"
            onClick={ this.getProductById }
          >
            Search
          </button>
        </label>
        <div className="body2">

          <aside className="aside">
            {categories.map((eachCategory) => (
              <RadialButton
                category={ eachCategory }
                onClick={ this.getValue }
                key={ eachCategory.id }
                value={ eachCategory.id }

              />
            ))}
          </aside>
          <div className="container">
            {searchProducts.map((eachItem) => (

              <CardProduct
                data-testid="product"
                key={ eachItem.id }
                listProduct={ eachItem }
                cartProps={ cartProducts }
                onClick={ this.addCart }
              />

            ))}
          </div>

          {!loading ? searchCategory.map((eachCategoryItem) => (

            <CardProduct
              data-testid=""
              key={ eachCategoryItem.id }
              listProduct={ eachCategoryItem }
              onClick={ this.addCart }
            />

          )) : (
            <div className="loading-parent">
              TURMA 16
            </div>
          )}

        </div>

      </div>
    );
  }
}
