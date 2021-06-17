import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: props.product,
    };
    this.handlerSubmit = this.handlerSubmit.bind(this);
  }

  handlerSubmit(param) {
    param.qtdItems = 1;
    /* Se localStorage.cart estiver vazio, adicione o produto(param) em formato de string à chave cart */
    if (!localStorage.cart) localStorage.setItem('cart', JSON.stringify([param]));
    else {
      /* Senão estiver vazio, pegue o item do localStorage, transforma em objeto(parse), percorra ele para checar se o id se repete.  */
      const getFromLocalStorage = JSON.parse(localStorage.getItem('cart'));
      const checkId = getFromLocalStorage.map((value) => value.id);
      const verifyId = checkId.indexOf(param.id);
      /* Caso o id não se repita(ou seja, retorne -1), adicione o novo objeto(param) à chave cart, senão adicione + 1 na quantidade do produto */
      if (verifyId < 0) {
        localStorage.setItem('cart', JSON.stringify([...getFromLocalStorage, param]));
      } else {
        getFromLocalStorage[verifyId].qtdItems += 1;
        localStorage.setItem('cart', JSON.stringify([...getFromLocalStorage]));
      }
    }
  }

  render() {
    const { product } = this.state;
    const { title, thumbnail, price } = product;
    return (
      <div data-testid="product">
        <p>{ title }</p>
        <img src={ thumbnail } alt={ title } />
        <p>{ price }</p>
        <Link
          to={ { pathname: '/components/ProductDetails',
            state: { product } } }
          data-testid="product-detail-link"
        >
          Detalhes
        </Link>
        <br />
        <button
          type="submit"
          data-testid="product-add-to-cart"
          onClick={ () => this.handlerSubmit(product) }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

Card.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default Card;
