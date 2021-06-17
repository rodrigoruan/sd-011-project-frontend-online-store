import React from 'react';
import { Link } from 'react-router-dom';

class Cart extends React.Component {
  constructor() {
    super();

    this.state = {
      cartProducts: [],
    };
    this.getItensCard = this.getItensCard.bind(this);
  }

  componentDidMount() {
    this.getItensCard();
  }

  getItensCard() {
    const items = { ...localStorage };
    console.log(items);
    this.setState({
      cartProducts: items,
    });
  }

  render() {
    const { cartProducts } = this.state;
    const cartKey = Object.keys(cartProducts);
    const cartSplit = String(cartProducts[cartKey]);
    console.log(cartSplit);
    const cardName = cartSplit.split(',http')[0];
    const cardImg = cartSplit.split(',')[1];
    const cardPrice = cartSplit.split('.jpg')[2];
    const produtoDoCarrinho = (
      <div>
        <p data-testid="shopping-cart-product-name">{ cardName }</p>
        <img src={ cardImg } alt={ cardName } />
        <p>{ cardPrice }</p>
        <span data-testid="shopping-cart-product-quantity">1</span>
      </div>);
    const mensagem = (
      <p data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </p>);
    return (
      <div>
        {localStorage.length !== 0 ? (produtoDoCarrinho) : (mensagem) }
        <Link to="/">Main</Link>
      </div>
    );
  }
}

export default Cart;
