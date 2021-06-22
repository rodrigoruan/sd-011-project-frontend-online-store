import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FormComment from '../component/FormComment';
import Comments from '../component/Comments';
// import ShoppingCart from './ShoppingCart';

export default class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      product: {},
      shipping: {},
      comments: [],
    };
    this.getProduct = this.getProduct.bind(this);
    this.setCommentarray = this.setCommentarray.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  componentDidMount() {
    this.getProduct();
  }

  handleAdd(product) {
    const { id, title, price, maxQtd = available_quantity } = product;
    const obj = {
      id,
      title,
      maxQtd,
      qtd: 1,
      value: price,
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

  setCommentarray(value) {
    const { comments } = this.state;
    this.setState({
      comments: [value, ...comments],
    });
  }

  render() {
    const { product, shipping, comments } = this.state;
    return (
      <div>
        <p data-testid="product-detail-name">{ product.title }</p>
        <p>{ `R$ ${product.price}` }</p>
        { shipping.free_shipping && <p data-testid="free-shipping">Frete Grátis</p> }
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => this.handleAdd(product) }
        >
          Adicionar
        </button>
        <FormComment idPrd={ product.id } evBtn={ this.setCommentarray } />
        <Comments idPrd={ product.id } arrayComment={ comments } />
        <Link to="/cart" data-testid="shopping-cart-button">Carrinho</Link>
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
  addItens: PropTypes.func.isRequired,
};
