import React from 'react';
import { Link } from 'react-router-dom';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      itens: [],
    };
    this.sumLocalStorage = this.sumLocalStorage.bind(this);
    this.subLocalStorage = this.subLocalStorage.bind(this);
    this.Nome = this.Nome.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  componentDidMount() {
    this.Nome();
  }

  sumLocalStorage(param) {
    const { itens } = this.state;
    // const qtdLocalStorage = JSON.parse(localStorage.getItem('cart'));
    const checkId = itens.map((valor) => valor.id);
    const verifyId = checkId.indexOf(param);
    itens[verifyId].qtdItems += 1;
    localStorage.setItem('cart', JSON.stringify([...itens]));
  }

  subLocalStorage(param) {
    const { itens } = this.state;
    // const qtdLocalStorage = JSON.parse(localStorage.getItem('cart'));
    const checkId = itens.map((valor) => valor.id);
    const verifyId = checkId.indexOf(param);
    itens[verifyId].qtdItems -= 1;
    localStorage.setItem('cart', JSON.stringify([...itens]));
  }

  Nome() {
    const produtoDoCarrinho = JSON.parse(localStorage.getItem('cart'));
    this.setState({
      itens: produtoDoCarrinho,
    });
  }

  removeItem(id) {
    const { itens } = this.state;
    const Arr = itens.filter((item) => item.id !== id);
    this.setState({
      itens: Arr,
    });
    localStorage.setItem('cart', JSON.stringify(Arr));
  }

  render() {
    const { itens } = this.state;
    // const produtoDoCarrinho = JSON.parse(localStorage.getItem('cart'));
    const mensagem = (
      <p data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </p>);
    const valorProducts = !itens ? mensagem : itens
      .map(({ price, qtdItems }) => price * qtdItems)
      .reduce((acc, curr) => (acc + curr), 0).toFixed(2);
    return (
      <div>
        {!localStorage.cart ? (mensagem) : itens
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
                  disabled={ qtdItems === 1 }
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
              <Link to="/components/Cart">
                <button
                  onClick={ () => this.removeItem(id) }
                  type="button"
                >
                  X
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
        <br />
        <Link
          to="/components/Checkout"
          data-testid="checkout-products"
        >
          Finalizar Compra
        </Link>
      </div>
    );
  }
}

export default Cart;
