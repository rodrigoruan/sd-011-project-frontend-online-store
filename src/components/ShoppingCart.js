import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Products.css';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = { products: [], count: 0 };
  }

  componentDidMount() {
    this.getItemLocalStorage();
  }

  getItemLocalStorage = () => {
    const getProducts = { ...localStorage };
    const arrayOfproducts = Object.values(getProducts).map((e) => JSON.parse(e));

    this.setState({ products: arrayOfproducts, count: arrayOfproducts });
  };

  handleClick = ({ target: { id } }) => {
    const product = JSON.parse(localStorage.getItem(id));
    localStorage.setItem(id, JSON.stringify(product));
    this.getItemLocalStorage();
  };

  handleDelete = ({ target: { id } }) => {
    localStorage.removeItem(id);
    this.getItemLocalStorage();
  };

  render() {
    const { count } = this.state;
    const { products } = this.state;

    if (!products.length) {
      return (
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      );
    }

    return (
      <>
        <div className="div-cart">
          <h1>Carrinho</h1>
          <p>
            TOTAL: R$
            {' '}
            { Math.round(products.reduce(
              (a, c) => a + (c.counter * c.price), 0,
            ) * 100) / 100 }
          </p>
          <Link to={ { pathname: '/checkout' } }>
            <button className="button" data-testid="checkout-products" type="button">
              Finalizar compra
            </button>
          </Link>
        </div>
        <ul className="cart-items">
          {products.map((
            { title, price, thumbnail, id, availableQuantity, attributes },
          ) => (
            <li className="card" key={ id }>
              <button
                className="button-delete"
                type="button"
                name="delete"
                id={ title }
                onClick={ this.handleDelete }
              >
                Excluir
              </button>
              <Link
                data-testid="product-detail-link"
                to={ {
                  pathname: `/product/${id}`,
                  state: { title,
                    price,
                    thumbnail,
                    id,
                    availableQuantity,
                    attributes,
                  },
                } }
              >
                <div className="product">

                  <img src={ thumbnail } alt={ `Foto do produto ${title}` } />
                  <h3 data-testid="shopping-cart-product-name">{title}</h3>
                  <p>{ `R$ ${price.toLocaleString('pt-BR')}` }</p>
                </div>
              </Link>
              <div className="buttons-cart">
                <button
                  data-testid="product-increase-quantity"
                  type="button"
                  className="button-sub-sum"
                >
                  -
                </button>
                <p
                  className="quantity"
                  data-testid="shopping-cart-product-quantity"
                >
                  {count.find((item) => item.title === title).counter}
                </p>
                <button
                  data-testid="product-decrease-quantity"
                  type="button"
                  className="button-sub-sum"
                >
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default ShoppingCart;
