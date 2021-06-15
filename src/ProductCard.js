import React, { Component } from 'react';

class ProductCard extends Component {
  render() {
    const { title, imgPath, price } = this.props;
    return (
      <div>
        <h3>{ title }</h3>
        <img src={ imgPath }></img>
        <p>{ price }</p>
      </div>
    );
  }
}

export default ProductCard;