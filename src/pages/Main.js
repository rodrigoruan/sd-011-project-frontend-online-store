import React from 'react';
import { Link } from 'react-router-dom';
import CategoryFilter from './CategoryFilter';
import ProductList from './ProductList';
import SearchBar from './SearchBar';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      selectedCategoryId: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCategoryClick = this.handleCategoryClick.bind(this);
  }

  handleCategoryClick({ target: { id } }) {
    this.setState({ selectedCategoryId: id });
  }

  handleSubmit(query) {
    this.setState({
      query,
    });
  }

  render() {
    const { selectedCategoryId, query } = this.state;
    const paragraph = 'Digite algum termo de pesquisa ou escolha uma categoria.';

    return (
      <div>
        <SearchBar onClick={ this.handleSubmit } />
        <nav>
          <Link data-testid="shopping-cart-button" to="/shoppingcart">
            Carrinho
          </Link>
        </nav>
        { !query && !selectedCategoryId
          ? <p data-testid="home-initial-message">{ paragraph }</p>
          : <ProductList categoryId={ selectedCategoryId } query={ query } />}
        <CategoryFilter onClick={ this.handleCategoryClick } />
      </div>
    );
  }
}
