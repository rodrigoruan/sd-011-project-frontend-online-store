import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/CardCreator.css';

class CardCreator extends Component {
  constructor(props) {
    super(props);

    this.createCard = this.createCard.bind(this);
  }

  createCard(item) {
    const { title, thumbnail, price, shipping: { free_shipping: freeShipping } } = item;
    return (
      <div className="product-card" data-testid="product">
        <h2 className="product-title">{title}</h2>
        <img
          className="product-image"
          src={ thumbnail }
          alt={ `imagem do produto: ${title}` }
        />
        <h3 className="product-price">{`R$ ${price}`}</h3>
        {
          freeShipping
            ? <p data-testid="free-shipping"> Frete Grátis </p>
            : undefined
        }
      </div>
    );
  }

  render() {
    const { item } = this.props;
    return this.createCard(item);
  }
}

CardCreator.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default CardCreator;
