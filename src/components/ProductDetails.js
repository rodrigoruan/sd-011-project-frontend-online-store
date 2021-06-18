import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ProductDetails extends Component {
  constructor() {
    super();

    this.handleSetStorage = this.handleSetStorage.bind(this);
  }

  handleSetStorage(param) {
    console.log(param);
    param.countProduct = 1; // Adicionando um chave para contar
    if (!localStorage.item) {
      localStorage.setItem('item', JSON.stringify([param])); // transformando o objeto em JSON
    } else {
      const arrayObject = JSON.parse(localStorage.getItem('item')); // Retorna o JSON para objeto
      const idProducts = arrayObject.map((value) => value.id);
      const num = idProducts.indexOf(param.id); // Se não existe retorna -1, se existe o index do array é retornado.
      if (num < 0) {
        localStorage.setItem('item', JSON.stringify([...arrayObject, param])); // Adicionando objeto não existente no localStorage
      } else {
        arrayObject[num].countProduct += 1;
        localStorage.setItem('item', JSON.stringify([...arrayObject])); // Se o id identificado já existir, mantem o localStorage
      }
    }
  }

  render() {
    const {
      location: {
        state: { result },
      },
    } = this.props;
    const { title, thumbnail, price } = result;
    const oj = JSON.parse(localStorage.getItem('item'));
    // const { countProduct } = arrayObject[0];
    return (
      <div>
        <h2 data-testid="product-detail-name">{`${title} - ${price}`}</h2>
        <img src={ thumbnail } alt={ title } />
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ () => this.handleSetStorage(result) }
        >
          Comprar
        </button>
        <Link
          data-testid="shopping-cart-button"
          to={ { pathname: '/ShoppingCart' } }
        >
          <button type="button">Carrinho</button>
        </Link>
        {localStorage.item && (
          <div data-testid="shopping-cart-size">
            {oj.reduce((a, v) => a + v.countProduct, 0)}
          </div>
        )}
        <Link to="/">Voltar</Link>
        <input type="text" />
        <textarea type="text" data-testid="product-detail-evaluation" />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.objectOf({
      results: PropTypes.objectOf({
        title: PropTypes.string,
        thumbnail: PropTypes.string,
        price: PropTypes.string,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};
