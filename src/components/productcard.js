import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class ProductCard extends Component {
  constructor() {
    super();
    this.state = {
      quantity: 1,
    };
    this.handleAddCart = this.handleAddCart.bind(this);
  }

  handleAddCart() {
    const { quantity } = this.state;
    const { id, title, thumbnail, price } = this.props;
    window.localStorage
      .setItem(id, [title, '/n', thumbnail, '/n', price, '/n', quantity]);
    console.log(this.props);
  }

  render() {
    const { title, thumbnail, price, category_id: categoryId, id } = this.props;
    return (
      <div data-testid="product">
        <img src={ thumbnail } alt={ title } />
        <h3>{title}</h3>
        <p>{`R$ ${price}`}</p>
        <Link
          data-testid="product-detail-link"
          to={ `/product/${categoryId}/${id}/${encodeURI(title)}` }
        >
          Mais Detalhes
        </Link>
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.string,
}.isRequired;
