import React from 'react';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      valor: 200,
      numberProducts: 1,
      soma: 200,
    };
    this.sumValueProduct = this.sumValueProduct.bind(this);
    this.subtractionValueProduct = this.subtractionValueProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
  }

  sumValueProduct() {
    const { valor, numberProducts } = this.state;
    const sum = valor * (numberProducts + 1);
    this.setState({
      numberProducts: numberProducts + 1,
      soma: sum,
    });
  }

  subtractionValueProduct() {
    const { valor, numberProducts } = this.state;
    const sum = valor * (numberProducts - 1);
    this.setState({
      numberProducts: numberProducts - 1,
      soma: sum,
    });
    if (numberProducts === 1) {
      this.setState({
        numberProducts: 1,
        soma: valor,
      });
    }
  }

  deleteProduct() {
    const testMain = document.querySelector('.test-main');
    const test = document.querySelector('.test');
    return testMain.removeChild(test);
  }

  render() {
    const { numberProducts, soma } = this.state;
    return (
      <div className="test-main">
        <h3 data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </h3>
        <div className="test">
          <p>
            Quantidade:
            {numberProducts}
          </p>
          <p>
            Valor:
            {soma}
          </p>
          <button onClick={ this.deleteProduct } type="button">X</button>
          <button onClick={ this.subtractionValueProduct } type="button">-</button>
          <button onClick={ this.sumValueProduct } type="button">+</button>
        </div>
      </div>
    );
  }
}

export default ShoppingCart; //
