import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import CartButton from '../components/CartButton';
import ProductListing from '../components/ProductListing';
import Category from '../components/Category';
import CardCreator from '../components/CardCreator';
import * as api from '../services/api';

class Main extends Component {
  constructor() {
    super();

    this.state = {
      productList: [],
      loading: true,
      query: '',
      categories: '',
      addingCart: [],
    };

    this.fetchProductCategory = this.fetchProductCategory.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick({ target }) {
    const { value } = target;
    const { productList, query } = this.state;
    if (productList !== []) {
      this.setState({ loading: true });
      api
        .getProductsFromCategoryAndQuery(value, query)
        .then((data) => this.setState({ productList: data.results, loading: false }));
    }
  }

  async fetchProductCategory() {
    const { query, categories } = this.state;
    api
      .getProductsFromCategoryAndQuery(categories, query)
      .then((data) => this.setState({ productList: data.results, loading: false }));
  }

  render() {
    const { productList, loading, query, addingCart } = this.state;
    return (
      <div>
        <Category change={ this.handleChange } click={ this.handleClick } />
        <SearchBar
          click={ this.fetchProductCategory }
          change={ this.handleChange }
          value={ query }
        />
        <CartButton
          link={ {
            pathname: '/cart',
            state: { cart: addingCart },
          } }
        />
        <ProductListing texto="Nenhum produto foi encontrado" />
        {loading
          ? null
          : productList.map((product, index) => (
            <div key={ index }>
              <CardCreator item={ product } />
              <button
                type="button"
                onClick={ () => {
                  const addedCart = [...addingCart, product];
                  localStorage.setItem('addingCart', JSON.stringify(addedCart));
                  this.setState(() => ({
                    addingCart: JSON.parse(localStorage.getItem('addingCart')) || [] }
                  ));
                } }
                data-testid="product-add-to-cart"
              >
                Adicione ao carrinho
              </button>
              <Link
                data-testid="product-detail-link"
                to={ { pathname: `/product-detail/${product.id}`,
                  state: { produto: product,
                    addToCart: JSON.parse(localStorage.getItem('addingCart')) || [] } } }
              >
                Saiba Mais
              </Link>
            </div>
          ))}
      </div>
    );
  }
}
export default Main;
