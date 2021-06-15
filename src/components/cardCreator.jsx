import React from 'react';

class cardCreator extends React.Component {
  render() {
    const { product: { title, thumbnail, price } } = this.props;
    return (
      <div data-testid="product">
        <p className="productName">{title}</p>
        <img src={ thumbnail } alt="Foto do Produto" className="productPicture" />
        <p className="productPrice">{price}</p>
      </div>
    );
  }
}

export default cardCreator;
