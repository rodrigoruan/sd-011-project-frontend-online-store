import React from 'react';

export default class Cart extends React.Component {
  // constructor() {
  //   super();
  // }

  render() {
    const items = { ...localStorage };
    const text = 'shopping-cart-empty-message';
    const renderCart1 = Object.values(items).map((e) => (
      <div key={ e.split(',/n')[0] }>
        <p data-testid="shopping-cart-product-name">{ e.split(',/n')[0] }</p>
        <img src={ e.split('/n')[1].replace(',', '') } alt={ e } />
        <p data-testid="shopping-cart-product-quantity">
          Quantidade:
          {e.split(',/n')[3]}
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
