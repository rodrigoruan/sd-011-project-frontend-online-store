import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';
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

    this.setState({
      inputData: '',
      productsData: apiData.results });
  }

  render() {
    const { productsData, inputData } = this.state;
    const { manipulateState } = this.props;
    return (
      <div>
        <input
          data-testid="query-input"
          value={ inputData }
          onChange={ this.getInputData }
        />
        <button type="button" data-testid="query-button" onClick={ this.getApiData }>
          Buscar
        </button>
        {productsData.map(({
          id,
          title,
          thumbnail,
          price,
          category_id: catId,
          shipping: { free_shipping: freeShipping },
        }) => (<ProductCard
          freeShipping={ freeShipping }
          id={ id }
          key={ id }
          title={ title }
          imgPath={ thumbnail }
          price={ price }
          category_id={ catId }
          manipulateState={ manipulateState }
        />
        ))}
      </div>
    );
  }
}

export default BuscaProduto;

BuscaProduto.propTypes = {
  manipulateState: PropTypes.func.isRequired,
};
