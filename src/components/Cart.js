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
    const { cartProducts, loading } = this.state;
    const { title, thumbnail, price } = cartProducts;
    const produtoDoCarrinho = (
      <div>
        <p data-testid="shopping-cart-product-name">{ title }</p>
        <img src={ thumbnail } alt={ title } />
        <p>{ price }</p>
      </div>);
    const mensagem = (
      <p data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </p>);
    return (
      <div>
        {loading ? (produtoDoCarrinho) : (mensagem) }
        <Link to="/">Main</Link>
      </div>
    );
  }
}

export default Cart;
