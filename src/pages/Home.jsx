import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingCart } from 'react-icons/md';
import { BiCircle } from 'react-icons/bi';
import SearchBar from '../components/SearchBar';
import * as Api from '../services/api';
import ProductCard from '../components/ProductCard';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      products: [],
      searchText: '',
      category: '',

    };
    this.fetchCategories = this.fetchCategories.bind(this);
    this.listCategories = this.listCategories.bind(this);
    this.fetchProducts = this.fetchProducts.bind(this);
    this.handleQuerySearch = this.handleQuerySearch.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
    this.listCategories();
  }

  async handleQuerySearch() {
    const { searchText, category } = this.state;
    const arrayProdutcs = await this.fetchProducts(category, searchText);
    console.log(arrayProdutcs);
    this.setState({
      products: arrayProdutcs,
    });
  }

  onInputChange({ target }) {
    const { value } = target;
    this.setState({
      searchText: value,
    });
  }

  async fetchProducts(categoryId, query) {
    const response = await Api.getProductsFromCategoryAndQuery(categoryId, query);
    return response;
  }

  async fetchCategories() {
    const requestCategories = await Api.getCategories();
    this.setState({
      categories: requestCategories,
    });
  }

  listCategories() {
    const { categories } = this.state;
    return categories.map((category) => (
      <li key={ category.id } data-testid="category">
        <BiCircle />
        { category.name }
      </li>));
  }

  render() {
    const { products } = this.state;

    return (
      <main>
        <SearchBar onInputChangeProps={ this.onInputChange } />
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.handleQuerySearch }
        >
          PESQUISAR
        </button>
        <section className="products-column">
          <div className="list-categories">{this.listCategories()}</div>
          <Link to="/shopping-cart" data-testid="shopping-cart-button">
            <MdShoppingCart />
          </Link>
          {products.length < 1
            ? <p>Nenhum produto encontrado</p>
            : products.map((item) => (<ProductCard key={ item.id } item={ item } />)) }
        </section>
      </main>
    );
  }
}
//
export default Home;
