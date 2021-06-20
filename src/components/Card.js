import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../css/Card.css';

export default class Card extends Component {
  constructor() {
    super();
    this.state = {
      counter: 1,
    };
  }

  handleClick = () => {
    const { sumCartItems } = this.props;
    this.setState((previous) => ({ counter: previous.counter + 1 }));

    const { counter } = this.state;
    const { title, price, thumbnail, id, attributes } = this.props;

    const object = { counter, price, thumbnail, id, attributes, title };
    const json = JSON.stringify(object);

    // const { location: { state } } = this.props; //*
    // const { title } = state; //*
    // console.log(` this.props.location.state de Card em Home: ${state}`); // Michel teste
    // const local = JSON.parse(localStorage.getItem(title));//*

    // this.setState((previous) => ({ counter: previous.counter + 1 }));//*
    // const { counter } = this.state;//*
    // local.counter = counter;//*
    // const json = JSON.stringify(local); //*
    // // localStorage.setItem(title, json);//*
    localStorage.setItem(title, json);
    sumCartItems();

    // AJUSTAR ESSA FUNÇÃO  PARA FUNCIONALIDADE DA HOME //
  };

  render() {
    // const { counter } = this.state; // Teste Michel
    const { title, price, thumbnail, id, attributes, shipping } = this.props;

    return (
      <div className="container-card" data-testid="product">
        <Link
          className="link-card"
          data-testid="product-detail-link"
          to={ {
            pathname: `/produtos/${id}`,
            state: { title, price, thumbnail, id, attributes, shipping },
          } }
        >
          <p className="title">{title}</p>
          <img src={ thumbnail } alt={ title } />
          {
            shipping.free_shipping
              ? <p data-testid="free-shipping">Frete Grátis!</p> : null
          }
          <p className="price">
            R$
            {price}
          </p>
        </Link>
        <button
          className="add-cart-button"
          data-testid="product-add-to-cart"
          onClick={ this.handleClick }
          type="button"
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
  id: PropTypes.string,
  free_shipping: PropTypes.bool,
}.isRequired;
