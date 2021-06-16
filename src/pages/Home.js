import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import imageTwo from '../imgs/Carrinho.png';
import ProductSearch from '../components/ProductSearch/ProductSearch';
import ProductsList from '../components/ProductsList/ProductsList';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: '',
      selectedCategory: '',
      loading: true,
      categories: [],
      products: [],
    };
    this.renderCategories = this.renderCategories.bind(this);
    this.setLoadState = this.setLoadState.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.getProducts = this.getProducts.bind(this);
    this.handleSelectCategory = this.handleSelectCategory.bind(this);
    this.renderShopCart = this.renderShopCart.bind(this);
  }

  componentDidMount() {
    this.setLoadState();
  }

  handleInputChange({ target }) {
    this.setState({ searchInput: target.value });
  }

  async handleSearch() {
    this.getProducts();
  }

  handleSelectCategory(id) {
    this.setState({ selectedCategory: id }, this.getProducts);
  }

  async getProducts() {
    const { selectedCategory, searchInput } = this.state;
    const data = await getProductsFromCategoryAndQuery(selectedCategory, searchInput);
    this.setState({ products: data.results });
  }

  async setLoadState() {
    const data = [...new Set(await getCategories())];
    this.setState((state) => ({
      loading: false,
      categories: [...state.categories, ...data],
    }));
  }

  renderCategories(data) {
    return (
      <ul>
        {data.map(({ id, name }) => (
          <li
            key={ id }
          >
            <button
              data-testid="category"
              type="button"
              onClick={ () => this.handleSelectCategory(id) }
            >
              { name }
            </button>
          </li>))}
      </ul>
    );
  }

  renderShopCart() {
    const { shopCart } = this.props;
    return (
      shopCart.map(({ title, amount }, index) => (
        <div key={ index }>
          <span
            data-testid="shopping-cart-product-name"
          >
            { title }
          </span>
          <p
            data-testid="shopping-cart-product-quantity"
          >
            Quantidade
            { amount }
          </p>
        </div>
      ))
    );
  }

  render() {
    const { loading, categories, products, searchInput } = this.state;
    const { handleAddToShopCart, shopCart } = this.props;
    return (
      <>
        <ProductSearch
          handleSubmit={ this.handleSearch }
          onChange={ this.handleInputChange }
          value={ searchInput }
        />
        <Link to="/ShoppingCart">
          <img
            width="30px"
            src={ imageTwo }
            alt="imagem do carrinho"
          />
        </Link>
        <main data-testid="shopping-cart-button" />
        {shopCart.length === 0
          ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          : this.renderShopCart()}
        {loading ? 'Loading...' : this.renderCategories(categories)}
        <ProductsList products={ products } handleAddToShopCart={ handleAddToShopCart } />
      </>
    );
  }
}
export default Home;

Home.propTypes = {
  handleAddToShopCart: PropTypes.func,
  shopCart: PropTypes.arrayOf(PropTypes.shape({
    amount: PropTypes.number,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
    title: PropTypes.string,
  })),
}.isRequired;
