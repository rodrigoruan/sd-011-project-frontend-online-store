import React, { Component } from 'react';

class ConteudoCarrinho extends Component {
  constructor() {
    super();

    this.state = {
      productsSelected: [],
    };

    this.getProductsFromStorage = this.getProductsFromStorage.bind(this);
    this.renderProducts = this.renderProducts.bind(this);
  }

  componentDidMount() {
    this.getProductsFromStorage();
  }

  getProductsFromStorage() {
    const productsSelected = JSON.parse(localStorage.getItem('products'));

    this.setState({ productsSelected });
  }

  renderProducts() {
    const { productsSelected } = this.state;

    if (productsSelected !== null) {
      return productsSelected.map(({ title, price, quantity, id }) => (
        <div key={ id }>
          <p data-testid="shopping-cart-product-name">{title}</p>
          <p>
            R$
            { price }
          </p>
          <p>
            Quantidade:
            {' '}
            <span data-testid="shopping-cart-product-quantity">
              {quantity}
            </span>
          </p>
        </div>
      ));
    }
    return undefined;
  }

  render() {
    const renderCart = this.renderProducts();
    const emptyCart = (
      <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
    );
    return renderCart !== undefined ? renderCart : emptyCart;
  }
}

export default ConteudoCarrinho;
