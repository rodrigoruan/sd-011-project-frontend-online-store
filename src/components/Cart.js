import React from 'react';
import { Link } from 'react-router-dom';

class Cart extends React.Component {
  constructor() {
    super();

    this.sumLocalStorage = this.sumLocalStorage.bind(this);
    this.subLocalStorage = this.subLocalStorage.bind(this);
  }

  sumLocalStorage(param) {
    const qtdLocalStorage = JSON.parse(localStorage.getItem('cart'));
    const checkId = qtdLocalStorage.map((valor) => valor.id);
    const verifyId = checkId.indexOf(param);
    qtdLocalStorage[verifyId].qtdItems += 1;
    localStorage.setItem('cart', JSON.stringify([...qtdLocalStorage]));
  }

  subLocalStorage(param) {
    const qtdLocalStorage = JSON.parse(localStorage.getItem('cart'));
    const checkId = qtdLocalStorage.map((valor) => valor.id);
    const verifyId = checkId.indexOf(param);
    qtdLocalStorage[verifyId].qtdItems -= 1;
    localStorage.setItem('cart', JSON.stringify([...qtdLocalStorage]));
  }

  render() {
    const produtoDoCarrinho = JSON.parse(localStorage.getItem('cart'));
    const mensagem = (
      <p data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </p>);
    const valorProducts = !produtoDoCarrinho ? mensagem : produtoDoCarrinho
      .map(({ price }) => price).reduce((acc, curr) => acc + curr);
    console.log(valorProducts);
    return (
      <div>
        {!localStorage.cart ? (mensagem) : produtoDoCarrinho
          .map(({ title, thumbnail, price, qtdItems, id }, index) => (
            <div key={ index }>
              <p data-testid="shopping-cart-product-name">{ title }</p>
              <img src={ thumbnail } alt={ title } />
              <p>{ price }</p>
              <span data-testid="shopping-cart-product-quantity">
                { qtdItems }
              </span>
              <Link to="/components/Cart">
                <button
                  data-testid="product-decrease-quantity"
                  type="submit"
                  onClick={ () => this.subLocalStorage(id) }
                >
                  -
                </button>
              </Link>
              <Link to="/components/Cart">
                <button
                  data-testid="product-increase-quantity"
                  type="submit"
                  onClick={ () => this.sumLocalStorage(id) }
                >
                  +
                </button>
              </Link>
            </div>
          ))}
        <br />
        <span>
          { `Total: ${valorProducts}` }
        </span>
        <br />
        <Link to="/">Main</Link>
      </div>
    );
  }
}

export default Cart;
