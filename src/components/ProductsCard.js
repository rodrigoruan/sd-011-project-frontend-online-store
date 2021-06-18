import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ProductsCard extends Component {
  constructor() {
    super();
    this.handleSetStorage = this.handleSetStorage.bind(this);
  }

  handleSetStorage(param) {
    // console.log(param);
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

    // this.setState({
    //   tamanho: arrayObject.length
    // });
  }

  render() {
    const {
      products: { results },
    } = this.props;
    return (
      <div>
        { results.map((result, index) => {
          const { id, title, thumbnail, price, shipping } = result;
          const { free_shipping: freeDelivery } = shipping;
          return (
            <div data-testid="product" key={ index }>
              <h2>{title}</h2>
              <img src={ thumbnail } alt={ title } />
              <p>{price}</p>
              <Link
                data-testid="product-detail-link"
                to={ { pathname: `/ProductDetails/${id}`, state: { result } } }
              >
                Mais Detalhes
              </Link>
              <Link to="/">
                <button
                  data-testid="product-add-to-cart"
                  type="button"
                  value={ result }
                  onClick={ () => this.handleSetStorage(result) }
                >
                  Adicionar Carrinho
                </button>
              </Link>
              <div>
                { freeDelivery
                  ? <p data-testid="free-shipping">Frete grátis!</p>
                  : <p>Frete a combinar!</p>}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

ProductsCard.propTypes = {
  products: PropTypes.shape({
    results: PropTypes.objectOf({
      title: PropTypes.string,
      thumbnail: PropTypes.string,
      price: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
