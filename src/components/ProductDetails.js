import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Form from './Form';

export default class ProductDetails extends Component {
  constructor() {
    super();

    this.state = {
      itemsCart: [],
      quantityItems: 0,
    };

    this.getValues = this.getValues.bind(this);
    this.foundQuantityItemsCart = this.foundQuantityItemsCart.bind(this);
  }

  componentDidMount() {
    this.getValues();
    this.foundQuantityItemsCart();
  }

  handlerLocalStore(param) {
    param.countP = 1;
    if (!localStorage.item) {
      localStorage.setItem('item', JSON.stringify([param]));
    } else {
      const getLocal = JSON.parse(localStorage.getItem('item'));
      const getId = getLocal.map((value) => value.id);
      const verify = getId.indexOf(param.id);
      if (verify < 0) {
        localStorage.setItem('item', JSON.stringify([...getLocal, param]));
      } else {
        getLocal[verify].countP += 1;
        localStorage.setItem('item', JSON.stringify([...getLocal]));
      }
    }
  }

  getValues() {
    const keys = Object.values(localStorage);
    if (keys.length > 0) {
      keys.forEach((value) => {
        JSON.parse(value);
      });
    }
  }

  foundQuantityItemsCart() {
    const getLocal = JSON.parse(localStorage.getItem('item'));
    let sumProduct = 0;
    if (getLocal) {
      getLocal.forEach((product) => {
        sumProduct += product.countP;
        return 1;
      });
      this.setState({
        quantityItems: sumProduct,
      });
    }
  }

  render() {
    const { itemsCart, quantityItems } = this.state;
    const { location: { state: { detail } } } = this.props;
    const { id, title, thumbnail, price, attributes, installments } = detail;

    return (
      <div>
        <Link
          data-testid="shopping-cart-button"
          to={ {
            pathname: '/shoppingCart',
            state: itemsCart,
          } }
        >
          Carrinho(
          <span data-testid="shopping-cart-size">{quantityItems}</span>
          )
        </Link>
        <div>
          <h1 data-testid="product-detail-name">{title}</h1>
          <img src={ thumbnail } alt={ title } />
          <h2>{`R$ ${price}`}</h2>
        </div>

        {
          installments ? (
            <div>
              <h5>{`${detail.sold_quantity} unidades vendidas.`}</h5>
              <p>
                {`Estoque: ${installments.quantity}`}
              </p>
            </div>
          ) : <p>Unidade única</p>
        }

        <div>
          <h3>Especificações Técnicas:</h3>
          <p>
            {attributes.map((attribute, index) => (
              <p key={ index }>
                {attribute.name}
                :
                {attribute.value_name}
              </p>
            ))}
          </p>
        </div>
        <Link to="/">Voltar</Link>
        <button
          data-testid="product-detail-add-to-cart"
          value={ id }
          onClick={ () => this.handlerLocalStore(detail) }
          type="button"
        >
          Adicionar ao Carrinho
        </button>
        <Form idProduct={ id } />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: {
    state: {
      details: {
        title: PropTypes.string,
        thumbnail: PropTypes.string,
        price: PropTypes.number,
        attributes: {
          name: PropTypes.string,
          value_name: PropTypes.string,
        },
        installment: {
          quantity: PropTypes.number,
        },
      },
    },
  }.isRequired,
};
