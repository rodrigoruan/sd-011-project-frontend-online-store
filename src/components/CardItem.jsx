import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/CardItem.css';

class CardItem extends React.Component {
  render() {
    const { products, addState } = this.props;
    const notFound = (<p className="notFound">Nenhum produto foi encontrado</p>);
    // const firstMsg = (<p className="firstMsg">Pesquise por categoria ou texto</p>);

    return products.length === 0 ? notFound : (
      products.map((product) => (
        <div key={ product.name } className="cardProduct">
          <img src={ product.thumbnail } alt={ product.title } className="productImage" />
          {/* Para fazer a utilização de props em componentes <Link>
          foi consultado um artigo em ui.dev
          Source: https://ui.dev/react-router-v5-pass-props-to-link/ */}
          <Link
            className="linkDetails"
            to={ {
              pathname: `/details/${product.id}`,
              state: {
                product,
              },
            } }
            data-testid="product-detail-link"
          >
            <div
              data-testid="product"
              key={ product.title }
            >
              <p>{product.title}</p>
              <p>{`R$ ${product.price}`}</p>
            </div>
          </Link>
          <button
            type="button"
            data-testid="product-add-to-cart"
            onClick={ () => addState(product) }
          >
            Adicionar ao carrinho
          </button>
        </div>
      ))
    );
  }
}
export default CardItem;

CardItem.propTypes = {
  products: PropTypes.shape({
    map: PropTypes.func.isRequired,
    length: PropTypes.arrayOf().isRequired,
  }).isRequired,
  addState: PropTypes.func.isRequired,
};
