import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
    this.setState((previus) => ({
      counter: previus.counter + 1,
    }));
    const obj = { title, thumbnail, price, id, counter };
    const objJSON = JSON.stringify(obj);
    localStorage.setItem(id, objJSON);
  }

  render() {
    const { title, thumbnail, price, id } = this.props;
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
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default Card;
