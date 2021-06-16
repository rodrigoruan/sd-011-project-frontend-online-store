import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as Api from '../services/api';
import Category from './Category';
import Products from './Products';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      textSearch: '',
      products: [],
      categoria: '',
    };
    this.getCategory = this.getCategory.bind(this);
    this.getProducts = this.getProducts.bind(this);
    this.getValuTextInput = this.getValuTextInput.bind(this);
  }

  componentDidMount() {
    this.getCategory();
    // this.getProducts();
  }

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

  render() {
    const { categories, products, textSearch } = this.state;
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
        <Link data-testid="shopping-cart-button" to="/cartitems">
          Carrinho de compras
        </Link>
        <button
          data-testid="query-button"
          type="button"
          onClick={ this.getProducts }
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
            <Products
              key={ product.id }
              title={ product.title }
              thumbnail={ product.thumbnail }
              price={ product.price }
            />
          ))}
        </div>
      </div>
    );
  }
}
