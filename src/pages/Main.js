import React from 'react';
import { Link } from 'react-router-dom';
import CategoryFilter from './CategoryFilter';
import ProductList from './ProductList';
import SearchBar from './SearchBar';

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      // query: '',
      // id: '',
      // product: [],
      // noItems: true,
    };
    this.handleState = this.handleState.bind(this);
    // this.SearchText = this.SearchText.bind(this);
  }

  handleState({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <nav>
          <Link data-testid="shopping-cart-button" to="/shoppingcart">
            Carrinho
          </Link>
        </nav>
        <ProductList categoryId="MLB5672" query="Apple" />
        <CategoryFilter />
      </div>
    );
  }
}
