import React, { Component } from 'react';

export default class Card extends Component {
  render() {
    const { title, price, thumbnail } = this.props;
    return (
      <div data-testid="product">
        <p>{ title }</p>
        <img src={ thumbnail } alt={ title } />
        <p>
          R$
          { price }
        </p>
      </div>
    );
  }
}
