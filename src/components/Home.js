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
      allCartItens: [],
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
    this.getLocalStorage();
  }

  getLocalStorage = () => {
    const getStorage = { ...localStorage }; // O spread operator, espalha, distribui todo o objeto, na variavel;
    const itemProduct = Object.values(getStorage)
      .map((item) => JSON.parse(item))
      .filter((product) => product.count);
    this.setState({
      allCartItens: itemProduct,
    });
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
    const { categories, products, textSearch, allCartItens } = this.state;

    return (
      <div className="main-container">
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
              <span data-testid="shopping-cart-size">
                {allCartItens.reduce((acc, cur) => acc + cur.count, 0)}
              </span>
            </Link>
          </div>
          <button
            data-testid="query-button"
            type="button"
            onClick={ this.getProducts }
          >
            Buscar Produto
          </button>
        </div>
        <section>
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
        </section>
        <section>
          <div>
            { products.map((product) => (
              <div key={ product.id }>
                <Link
                  key={ product.id }
                  to={ { pathname: `/details/${product.id}`, state: { product } } }
                  data-testid="product-detail-link"
                >
                  <Products
                    key={ product.id }
                    title={ product.title }
                    thumbnail={ product.thumbnail }
                    price={ product.price }
                  />
                </Link>
                <Button
                  title={ product.title }
                  thumbnail={ product.thumbnail }
                  price={ product.price }
                  quantity={ product.available_quantity }
                  dataTestid="product-add-to-cart"
                  funcGetLocalStorage={ this.getLocalStorage }
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }
}
