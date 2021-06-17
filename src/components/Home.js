import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as Api from '../services/api';
import Category from './Category';
import Products from './Products';
import Button from './Button';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      textSearch: '',
      products: [],
      categoria: '',
      storage: localStorage.length,
    };
    this.getCategory = this.getCategory.bind(this);
    this.getProducts = this.getProducts.bind(this);
    this.getValuTextInput = this.getValuTextInput.bind(this);
    this.getLocalStorage = this.getLocalStorage.bind(this);
  }

  componentDidMount() {
    this.getCategory();
    // this.getProducts();
  }

  // componentDidUpdate() {
  // this.getLocalStorage();
  // }

  getValuTextInput({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  async getCategory() {
    const returnApiGetCategory = await Api.getCategories();
    this.setState({
      categories: returnApiGetCategory,
    });
  }

  async getProducts() {
    const { categoria, textSearch } = this.state;
    const returnGetProducts = await
    Api.getProductsFromCategoryAndQuery(categoria, textSearch);
    const arrayReturnProducts = returnGetProducts.results;
    this.setState({
      products: arrayReturnProducts,
    });
  }

  getLocalStorage() {
    const { storage } = this.state;
    if (storage !== localStorage.length) {
      this.setState({
        storage: localStorage.length,
      });
    }
  }

  // addToCart() {
  //   const { title, price, thumbnail } = this.props;
  //   localStorage.setItem(`item ${title}`, [`${title} - R$${price}`, `${thumbnail}`]);
  // }

  render() {
    const { categories, products, textSearch, storage } = this.state;
    return (
      <div>
        <label htmlFor="textSearch" data-testid="home-initial-message">
          <input
            data-testid="query-input"
            type="text"
            name="textSearch"
            value={ textSearch }
            onChange={ this.getValuTextInput }
          />
          Digite algum termo de pesquisa ou escolha uma categoria.
        </label>
        <div>
          <Link data-testid="shopping-cart-button" to="/cartitems">
            Carrinho de compras
          </Link>
          <span>
            { storage }
          </span>
        </div>
        <button
          data-testid="query-button"
          type="button"
        >
          Buscar Produto
        </button>
        <div onChange={ this.getValuTextInput }>
          {categories.map((category) => (
            <Category
              onClick={ this.getProducts }
              key={ category.id }
              value={ category.id }
              name={ category.name }
            />
          ))}
        </div>
        <div>
          {products.map((product) => (
            <div key={ product.id }>
              <Link
                key={ product.id }
                to={ { pathname: `/details/${product.id}`, state: { product } } }
                data-testid="product-detail-link"
              >
                <Products
                  title={ product.title }
                  thumbnail={ product.thumbnail }
                  price={ product.price }
                />
              </Link>
              <Button
                title={ product.title }
                thumbnail={ product.thumbnail }
                price={ product.price }
                // onClick={ this.getLocalStorage }

              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
