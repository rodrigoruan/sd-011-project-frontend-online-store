import React from 'react';
import * as fetchApi from '../services/api';

class SearchButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredProducts: [],
    };
    this.fetchProduct = this.fetchProduct.bind(this);
  }

  componentDidMount() {
    this.fetchProduct();
  }

  async fetchProduct() {
    const { inputValue } = this.props;
    const filterProducts = await fetchApi.getProductsFromCategoryAndQuery('', inputValue);
    this.setState({
      filteredProducts: filterProducts,
    });
  }

  render() {
    const { filteredProducts } = this.state;
    return (
      <div>
        <button type="submit" onClick={ this.fetchProduct } data-testid="query-button">Buscar</button>
      </div>
    );
  }
}

export default SearchButton;
