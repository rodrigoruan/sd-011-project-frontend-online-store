import React from 'react';
import { Link } from 'react-router-dom';
import CategoriesList from './CategoriesList';
import Button from './Button';

class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { value } = target;
    this.setState({
      searchText: value,
    });
  }

  render() {
    const { searchText } = this.state;
    return (
      <div data-testid="home-initial-message">
        <label htmlFor="input-search">
          <input
            name="input-search"
            type="text"
            data-testid="query-input"
            onChange={ this.handleChange }
            value={ searchText }
          />
        </label>
        <Button value={ searchText } />
        <Link
          data-testid="shopping-cart-button"
          to="/components/Cart"
        >
          Cart
        </Link>
        <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
        <div>
          <CategoriesList />
        </div>
      </div>
    );
  }
}

export default MainPage;
