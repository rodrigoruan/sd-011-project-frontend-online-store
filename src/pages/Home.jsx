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
      shoppingCart: [],
    };
    this.fetchCategories = this.fetchCategories.bind(this);
    this.listCategories = this.listCategories.bind(this);
    this.handleSearchs = this.handleSearchs.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.addProductToShoppingCartState = this.addProductToShoppingCartState.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
    this.listCategories();
  }

  async handleSearchs({ target }) {
    const { name } = target;
    const { searchText } = this.state;
    const arrayProdutcs = await Api.getProductsFromCategoryAndQuery(name, searchText);
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
        className="category-li"
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

  addProductToShoppingCartState(item) {
    const { shoppingCart } = this.state;
    this.setState({
      shoppingCart: [...shoppingCart, item],
    });
  }

  render() {
    const { products, shoppingCart } = this.state;
    return (
      <main>
        <div className="input-div">
          <SearchBar onInputChangeProps={ this.onInputChange } />
          <button
            className="search-btn"
            type="button"
            data-testid="query-button"
            onClick={ this.handleSearchs }
          >
            PESQUISAR
          </button>
        </div>
        <section className="products-column">
          <Link
            className="seeCart-btn"
            data-testid="shopping-cart-button"
            to={ {
              pathname: '/shopping-cart',
              state: { shoppingCart },
            } }
          >
           <MdShoppingCart size={ 30 } />
           Carrinho 
          </Link>
          <ul className="list-categories">
            {this.listCategories()}
          </ul>
          <div className="products-list">
            {products.length > 0
              ? products.map((item) => (
                <ProductCard
                  className="product-info"
                  key={ item.id }
                  item={ item }
                  addProductToShoppingCartStateProps={ this.addProductToShoppingCartState }
                />
              ))
              : <p>Nenhum produto encontrado</p> }
          </div>
        </section>
      </main>
    );
  }
}

export default Home;
