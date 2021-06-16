import React from 'react';
import './SearchBar.css';
import CartButton from '../CartButton/index';
import * as api from '../../services/api';
import EmptyHome from './EmptyHome';
import ProductCard from '../ProductCard';

export default class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      products: [],
      searchInput: '',
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
    this.setState({
      [name]: value,
    });
  }

  fetchCategories() {
    api.getCategories().then((elements) => this.setState({
      categories: elements,
    }));
  }

  fetchProductsByTerm() {
    const { searchInput } = this.state;
    api.getProductsFromCategoryAndQuery('', searchInput).then((r) => this.setState({
      products: r.results,
    }));
  }

  render() {
    const { categories, products } = this.state;
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
                <label htmlFor={ categorie.id }>
                  <input
                    type="radio"
                    value={ categorie.name }
                    data-testid="category"
                    name="category"
                    id={ categorie.id }
                  />
                  { categorie.name }
                </label>
              </div>
            ))}
          </aside>
          <div className="mainContent">
            { products.length === 0
              ? <EmptyHome />
              : <ProductCard products={ products } /> }
          </div>
        </div>
      </div>
    );
  }
}
