import React from 'react';
import styles from './SearchBar.module.css';
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
      <div className={ styles.container }>
        <div className={ styles.headerContainer }>
          <p>TrybeStore</p>
          <label htmlFor="search-input" className={ styles.headerLabel }>
            <input type="text" name="search-input" id="search-input" />
            <i className="fa fa-search" id={ styles.lupaIcon }>
              <span />
            </i>
          </label>
          <CartButton />
        </div>
        <div className={ styles.heroContent }>
          <aside>
            {categories.map((categorie) => (
              <div key={ categorie.id } className={ styles.categoryItem }>
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
          <div className={ styles.mainContent }>
            <h1 data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </h1>
          </div>
        </div>
      </div>
    );
  }
}
