import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Card extends Component {
  render() {
    const { title, price, thumbnail, id } = this.props;
    return (
      <Link data-testid="product-detail-link" to={ `/produtos/${id}` }>
        <div data-testid="product">
          <p>{ title }</p>
          <img src={ thumbnail } alt={ title } />
          <p>
            R$
            { price }
          </p>
        </div>
      </Link>
    );
  }
}
