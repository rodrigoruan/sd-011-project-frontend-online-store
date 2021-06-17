import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Cardproduct extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.loadCartList = this.loadCartList.bind(this);
  }

  handleClick() {
    const { title, img, price } = this.props;
    const previousList = this.loadCartList();
    previousList.push({ title, img, price });
    localStorage.setItem('cartList', JSON.stringify(previousList));
  }

  loadCartList() {
    let previousList = localStorage.getItem('cartList');
    if (previousList === null) {
      previousList = [];
      return previousList;
    }
    return JSON.parse(previousList);
  }

  render() {
    const { title, img, price, id, categoryId } = this.props;
    return (
      <div data-testid="product">
        <p data-testid="shopping-cart-product-name">{ title }</p>
        <img src={ img } width="100px" alt="produto" />
        <p data-testid="shopping-cart-product-quantity">1</p>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ this.handleClick }
        >
          Adicionar ao carrinho
        </button>
        <p>{ `R$ ${parseFloat(price).toFixed(2)}` }</p>
        <Link
          to={ `/product-detail/${categoryId}/${id}` }
          data-testid="product-detail-link"
        >
          Ver Detalhes
        </Link>
      </div>
    );
  }
}

Cardproduct.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  categoryId: PropTypes.string.isRequired,
};

export default Cardproduct;
