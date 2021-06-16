import React from 'react';
import './SearchBar.css';
import CartButton from '../CartButton/index';
import * as api from '../../services/api';

export default class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };

    this.fetchCategories = this.fetchCategories.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories() {
    api.getCategories().then((elements) => this.setState({
      categories: elements,
    }));
  }

  render() {
    const { categories } = this.state;
    // console.log(categories);
    // api.getProductsFromCategoryAndQuery('MLB5672', 'Biela').then((r) => console.log(r));
    return (
      <div className="container">
        <div className="headerContainer">
          <p>TrybeStore</p>
          <label htmlFor="search-input" className="headerLabel">
            <input
              type="text"
              name="search-input"
              className="headerInput"
              id="search-input"
            />
            <i className="fa fa-search lupaIcon">
              <span />
            </i>
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
            <h1 data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </h1>
          </div>
        </div>
      </div>
    );
  }
}
