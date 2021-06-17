import React from 'react';
import './SearchBar.css';
import CartButton from '../CartButton/index';
import * as api from '../../services/api';
import EmptyHome from './EmptyHome';
import ProductCard from '../ProductCard';
import NotFound from './NotFound';

export default class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      products: [],
      searchInput: '',
      searched: false,
      category: '',
    };

    this.fetchCategories = this.fetchCategories.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.fetchProductsByTerm = this.fetchProductsByTerm.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  handleInputChange({ target }) {
    const { name, value } = target;
    if (name === 'category') {
      this.setState({
        [name]: value,
      }, () => this.fetchProductsByTerm()); // Ajuda do Tales Coelho!
    } else {
      this.setState({
        [name]: value,
      });
    }
  }

  fetchCategories() {
    api.getCategories().then((elements) => this.setState({
      categories: elements,
    }));
  }

  fetchProductsByTerm() {
    const { searchInput, category } = this.state;
    api.getProductsFromCategoryAndQuery(category, searchInput).then((r) => this.setState({
      products: r.results,
      searched: true,
    }));
  }

  render() {
    const { categories, products, searched } = this.state;
    let renderedComponent;
    if (!searched) {
      renderedComponent = <EmptyHome />;
    } else if (products.length === 0 && searched) {
      renderedComponent = <NotFound />;
    } else {
      renderedComponent = <ProductCard products={ products } />;
    }

    return (
      <div className="container">
        <div className="headerContainer">
          <p>TrybeStore</p>
          <label htmlFor="search-input" className="headerLabel">
            <input
              data-testid="query-input"
              type="text"
              name="searchInput"
              className="headerInput"
              id="search-input"
              onChange={ this.handleInputChange }
            />
            <button
              type="button"
              onClick={ this.fetchProductsByTerm }
              data-testid="query-button"
            >
              {/* <i className="fa fa-search lupaIcon">
              </i> */}
              Buscar
            </button>
          </label>
          <CartButton />
        </div>
        <div className="heroContent">
          <aside>
            {categories.map((categorie) => (
              <div key={ categorie.id } className="categoryItem">
                <button
                  type="button"
                  value={ categorie.id }
                  data-testid="category"
                  name="category"
                  onClick={ this.handleInputChange }
                >
                  { categorie.name }
                </button>
              </div>
            ))}
          </aside>
          <div className="mainContent">
            {renderedComponent}
          </div>
        </div>
      </div>
    );
  }
}
