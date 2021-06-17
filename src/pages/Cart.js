import React from 'react';

export default class Cart extends React.Component {
  // constructor() {
  //   super();
  // }

  render() {
    const items = { ...localStorage };
    const text = 'shopping-cart-empty-message';
    const renderCart1 = Object.values(items).map((e) => (
      <div key={ JSON.parse(e).id }>
        <p data-testid="shopping-cart-product-name">{ JSON.parse(e).title }</p>
        <img src={ JSON.parse(e).thumbnail } alt={ e } />
        <p data-testid="shopping-cart-product-quantity">
          { JSON.parse(e).quantity }
        </p>
      </div>
    ));
    return (
      <div>
        { window.localStorage
          .length > 0 ? renderCart1 : <p data-testid={ text }>Seu carrinho está vazio</p>}
      </div>
    );
  }
}
