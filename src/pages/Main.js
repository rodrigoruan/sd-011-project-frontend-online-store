import React from 'react';
import { Link } from 'react-router-dom';
import CategoryFilter from './CategoryFilter';
import ProductList from './ProductList';
import SearchBar from './SearchBar';

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      query: '',
      categoryId: '',
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(query) {
    this.setState({
      query,
    });
  }

  render() {
    const { categoryId, query } = this.state;
    const paragraph = 'Digite algum termo de pesquisa ou escolha uma categoria.';
    return (
      <div>
        <SearchBar onClick={ this.onClick } />
        <nav>
          <Link data-testid="shopping-cart-button" to="/shoppingcart">
            Carrinho
          </Link>
        </nav>
        { !query
          ? <p data-testid="home-initial-message">{ paragraph }</p>
          : <ProductList categoryId={ categoryId } query={ query } />}
        <CategoryFilter />
      </div>
    );
  }
}
