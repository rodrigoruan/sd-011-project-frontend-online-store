import React from 'react';
import CartCard from '../components/CartCard';

export default class Cart extends React.Component {
  constructor() {
    super();
    this.getAllValues = this.getAllValues.bind(this);
  }

  getAllValues() {
    const items = { ...localStorage };
    const totalValues = Object.values(items).reduce((e, e1) => {
      const valuesIndex = JSON.parse(e1);
      return e + valuesIndex.totalValues;
    }, 0);
    return (
      <div>
        Valor total:
        {' '}
        {totalValues}
      </div>
    );
  }

  render() {
    const items = { ...localStorage };
    const text = 'shopping-cart-empty-message';
    const renderCart1 = Object.values(items).map((e) => (
      <div key={ JSON.parse(e).id }>
        <CartCard { ...JSON.parse(e) } />
        <div />
      </div>

    ));
    return (
      <div>
        { window.localStorage
          .length > 0 ? renderCart1 : <p data-testid={ text }>Seu carrinho está vazio</p>}
        <div>
          <br />
          {this.getAllValues()}
        </div>
      </div>
    );
  }
}
