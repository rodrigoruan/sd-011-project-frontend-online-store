import React from 'react';
import CategoryFilter from '../components/CategoryFilter';
import ProductList from '../components/ProductList';
import SearchBar from '../components/SearchBar';
import CartButton from '../components/CartButton';

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
        <CartButton />
        { !query && !selectedCategoryId
          ? <p data-testid="home-initial-message">{ paragraph }</p>
          : <ProductList categoryId={ selectedCategoryId } query={ query } />}
        <CategoryFilter onClick={ this.handleCategoryClick } />
      </div>
    );
  }
}
