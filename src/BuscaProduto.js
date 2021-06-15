import React, { Component } from 'react';
import * as api from './services/api';
import ProductCard from './ProductCard';

class BuscaProduto extends Component {
  constructor() {
    super();

    this.state = {
      inputData: '',
      productsData: [],
    };

    this.getInputData = this.getInputData.bind(this);
    this.getApiData = this.getApiData.bind(this);
  }

  getInputData({ target }) {
    const inputData = target.value;
    this.setState({ inputData });
  }

  async getApiData() {
    const { inputData } = this.state;
    const dataText = inputData;
    const apiData = await api.getProductsFromCategoryAndQuery(
      '$CATEGORY_ID',
      dataText,
    );

    this.setState({ productsData: apiData.results });
  }

  render() {
    const { productsData } = this.state;
    return (
      <div>
        <input data-testid="query-input" onChange={ this.getInputData } />
        <button type="button" data-testid="query-button" onClick={ this.getApiData }>
          Buscar
        </button>
        {productsData.map(({ id, title, thumbnail, price }) => (
          <ProductCard
            key={ id }
            title={ title }
            imgPath={ thumbnail }
            price={ price }
          />
        ))}
      </div>
    );
  }
}

export default BuscaProduto;
