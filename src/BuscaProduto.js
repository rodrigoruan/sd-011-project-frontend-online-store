import React, { Component } from 'react';
import * as api from './services/api';
import data from './services/apiDataResult';

class BuscaProduto extends Component {
  constructor() {
    super();

    this.state = {
      inputData: '',
    }

    this.getInputData = this.getInputData.bind(this);
    this.getApiData = this.getApiData.bind(this);
  }

  getInputData({ target }) {
    const inputData = target.value;
    this.setState({ inputData });
  }

  async getApiData() {
    const dataText = this.state.inputData;
    const apiData = await api.getProductsFromCategoryAndQuery('$CATEGORY_ID', dataText);
    
    apiData.results.forEach((dataProduct) => {
      data.push(dataProduct);
    });
  }

  render() {
    return (
      <div>
        <input data-testid="query-input" onChange={this.getInputData}></input>
        <button data-testid="query-button" onClick={this.getApiData}>Buscar</button>
      </div>
    );
  }
}

export default BuscaProduto;