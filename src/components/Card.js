import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Free from './Free';

class Card extends Component {
  setItem = () => {
    const cart = JSON.parse(localStorage.ShoppingCart);
    const { title, thumbnail, price, id, someCounter, availableQuantity } = this.props;
    if (cart.find((element) => element.id === id)) {
      const objJSON = cart.map((element) => {
        if (element.id === id) element.counter += 1;
        return element;
      });
      localStorage.ShoppingCart = JSON.stringify(objJSON);
    } else {
      const obj = {
        title,
        thumbnail,
        price,
        id,
        availableQuantity,
        counter: 1,
      };
      const objJSON = [...cart, obj];
      localStorage.ShoppingCart = JSON.stringify(objJSON);
    }
    someCounter();
  }

  renderShipping(shipping) {
    if (shipping.free_shipping) {
      return <Free />;
    }
  }

  render() {
    const { title, thumbnail, price, id, shipping, availableQuantity } = this.props;
    return (
      <div data-testid="product">
        <Link
          data-testid="product-detail-link"
          to={ {
            pathname: `/product/${id}`,
            state: { title, thumbnail, price, id, availableQuantity },
          } }
        >
          <h2>{title}</h2>
          <img src={ thumbnail } alt={ title } />
          { this.renderShipping(shipping) }
          <p>{price}</p>
          Mais informações
        </Link>
        <button
          data-testid="product-add-to-cart"
          type="button"
          onClick={ this.setItem }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  shipping: PropTypes.shape({
    free_shipping: PropTypes.bool,
  }).isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  someCounter: PropTypes.func.isRequired,
  availableQuantity: PropTypes.number.isRequired,
};

export default Card;
