import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Cart from '../imgs/Carrinho.png';
import ProductSearch from '../components/ProductSearch/ProductSearch';
import ProductsList from '../components/ProductsList/ProductsList';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import './Home.css';

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

  render() {
    const { loading, categories, products, searchInput } = this.state;
    const { handleAddToShopCart } = this.props;
    console.log({ products });
    return (
      <>
        <header className="home-header">
          <ProductSearch
            handleSubmit={ this.handleSearch }
            onChange={ this.handleInputChange }
            value={ searchInput }
          />
          <Link
            to="/ShoppingCart"
            className="shopping-cart-button"
            data-testid="shopping-cart-button"
          >
            <img
              width="30px"
              src={ Cart }
              alt="imagem do carrinho"
            />
          </Link>
        </header>

        <main className="home-main-container">
          <div className="categories-container">
            {loading ? 'Loading...' : this.renderCategories(categories)}
          </div>
          <ProductsList
            products={ products }
            handleAddToShopCart={ handleAddToShopCart }
          />
        </main>
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
