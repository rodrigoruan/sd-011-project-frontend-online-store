import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingCart } from 'react-icons/md';
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

    };
    this.fetchCategories = this.fetchCategories.bind(this);
    this.listCategories = this.listCategories.bind(this);
    this.handleSearchs = this.handleSearchs.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
    this.listCategories();
  }

  async handleSearchs({ target }) {
    const { name } = target;
    const { searchText } = this.state;
    const arrayProdutcs = await Api.getProductsFromCategoryAndQuery(name, searchText);
    console.log(arrayProdutcs);
    this.setState({
      products: arrayProdutcs.results,
    });
  }

  onInputChange({ target }) {
    const { value } = target;
    this.setState({
      searchText: value,
    });
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
      <button
        name={ category.id }
        type="button"
        key={ category.id }
        data-testid="category"
        onClick={ this.handleSearchs }
      >
        { category.name }
      </button>
    ));
  }

  render() {
    const { products } = this.state;

    return (
      <main>
        <SearchBar onInputChangeProps={ this.onInputChange } />
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.handleSearchs }
        >
          PESQUISAR
        </button>
        <section className="products-column">
          <ul className="list-categories">
            {this.listCategories()}
          </ul>

          <Link to="/shopping-cart" data-testid="shopping-cart-button">
            <MdShoppingCart />
          </Link>
          {products.length > 0
            ? products.map((item) => (<ProductCard key={ item.id } item={ item } />))
            : <p>Nenhum produto encontrado</p> }
        </section>
      </main>
    );
  }
}
//
export default Home;
