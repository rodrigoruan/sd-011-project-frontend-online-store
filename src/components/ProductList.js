import React, { Component } from 'react';

export default class ProductList extends Component {
  render() {
    const { products: { title, price, thumbnail } } = this.props;
    return (
      <div>
        <p>{ title }</p>
        <img src={ thumbnail } alt={ title } />
        <p>R$ {price}</p>
      </div>
    );
  }
}
