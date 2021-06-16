import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: props.product,
    };
    this.handlerSubmit = this.handlerSubmit.bind(this);
  }

  handlerSubmit() {
    const { product } = this.state;
    const { title, thumbnail, price, id } = product;
    window.localStorage.setItem(id, [title, thumbnail, price]);
  }

  render() {
    const { product } = this.state;
    const { title, thumbnail, price } = product;
    return (
      <div data-testid="product">
        <p>{ title }</p>
        <img src={ thumbnail } alt={ title } />
        <p>{ price }</p>
        <Link
          to={ { pathname: '/components/ProductDetails',
            state: { product } } }
          data-testid="product-detail-link"
        >
          Detalhes
        </Link>
        <br />
        <button
          type="submit"
          data-testid="product-add-to-cart"
          onClick={ this.handlerSubmit }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

Card.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default Card;
