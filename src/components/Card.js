import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Free from './Free';

class Card extends Component {
  constructor() {
    super();
    this.state = {
      counter: 1,
    };
  }

  setItem = () => {
    const { title, thumbnail, price, id } = this.props;
    const { counter } = this.state;
    this.setState((previous) => ({
      counter: previous.counter + 1,
    }));
    const obj = { title, thumbnail, price, id, counter };
    const objJSON = JSON.stringify(obj);
    localStorage.setItem(id, objJSON);
  }

  renderShipping(shipping) {
    if (shipping.free_shipping) {
      return <Free />;
    }
  }

  render() {
    const { title, thumbnail, price, id, shipping } = this.props;
    return (
      <div data-testid="product">
        <Link
          data-testid="product-detail-link"
          to={ {
            pathname: `/product/${id}`,
            state: { title, thumbnail, price, id },
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
};

export default Card;
