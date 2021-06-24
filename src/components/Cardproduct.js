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
    const { id, title, thumbnail, price, cartQuantity, availableQuantity } = this.props;
    const previousList = this.loadCartList();
    if (previousList[id]) {
      previousList[id].quantity += 1;
    } else {
      previousList[id] = { id, title, thumbnail, price, quantity: 1, availableQuantity };
    }
    localStorage.setItem('cartList', JSON.stringify(previousList));
    cartQuantity();
  }

  loadCartList() {
    let previousList = localStorage.getItem('cartList');
    if (previousList === null) {
      previousList = {};
      return previousList;
    }
    return JSON.parse(previousList);
  }

  render() {
    const { title, thumbnail, price, id, categoryId, availableQuantity } = this.props;
    return (
      <div
        data-testid="product"
        className="product-card"
      >
        <p>{ title }</p>
        <img src={ thumbnail } width="100px" alt="produto" />
        <p>{ availableQuantity }</p>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ this.handleClick }
        >
          Adicionar ao carrinho
        </button>
        <p>{ `R$ ${parseFloat(price).toFixed(2).replace('.', ',')}` }</p>
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
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  categoryId: PropTypes.string.isRequired,
  cartQuantity: PropTypes.func.isRequired,
  availableQuantity: PropTypes.string.isRequired,
};

export default Cardproduct;
