import React from 'react';

class CardItem extends React.Component {

  render() {
    const { products } = this.props;
    return products.map(({ title, thumbnail, price }) => {
      return (
        <div data-testid="product">
          <p>{ title }</p>
          <img src={ thumbnail } alt={ title }/>
          <p>{price}</p>
        </div>
      );
    });
  }
}
export default CardItem;