import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShoppingCart from './ShoppingCart';

export default class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      product: {},
      shipping: {},
    };
    this.getProduct = this.getProduct.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  componentDidMount() {
    this.getProduct();
  }

  handleAdd(product) {
    const obj = {
      id: product.id,
      title: product.title,
    };
    const { addItens } = this.props;
    addItens(obj);
  }

  async getProduct() {
    const { match: { params: { id } } } = this.props;
    const result = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const json = await result.json();
    const { shipping } = json;
    this.setState({
      product: json,
      shipping,
    });
  }

  render() {
    const { product, shipping } = this.state;
    const { itensAdded } = this.props;
    return (
      <div>
        <p data-testid="product-detail-name">{ product.title }</p>
        <p>{ `R$ ${product.price}` }</p>
        { shipping.free_shipping
          ? <p data-testid="free-shipping">Frete Grátis</p> : '' }
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => this.handleAdd(product) }
        >
          Adicionar
        </button>
        <ShoppingCart itensArray={ itensAdded } />
      </div>
    );
  }
}

ProductDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  itensAdded: PropTypes.arrayOf(PropTypes.object).isRequired,
  addItens: PropTypes.func.isRequired,
};
