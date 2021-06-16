import React from 'react';
import ProductCard from './ProductCards';
import * as api from './services/api';
// Agora vai

class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      filtrar: '',
      produtosFiltrados: [],
    };

    this.getInput = this.getInput.bind(this);
    this.filterElements = this.filterElements.bind(this);
  }

  getInput({ target: { value } }) {
    this.setState({
      filtrar: value,
    });
  }

  async filterElements() {
    const { filtrar } = this.state;
    const elementsList = await api.getProductsFromCategoryAndQuery('', filtrar);
    this.setState({
      produtosFiltrados: elementsList.results,
    });
  }

  render() {
    const { produtosFiltrados } = this.state;
    return (
      <div>
        {produtosFiltrados.map((product) => (
          <ProductCard
            produto={ product }
            key={ product.title }
          />))}
        <input
          data-testid="query-input"
          type="text"
          placeholder="Digite o produto aqui..."
          name="filtrar"
          onChange={ this.getInput }

        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.filterElements }
        >
          Filtrar
        </button>
      </div>);
  }
}

export default ProductList;
