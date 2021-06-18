import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Details extends React.Component {
  /*
  // constructor() {
  //   super();
  //   this.state = {
  //     products: [],
  //   }
  // }

  // // async getItemsFromCategoryAndQuery(category, inputQuery) {
  // //   const request = await api.getProductsFromCategoryAndQuery(category, inputQuery);
  // //   console.log('AQUI', request)
  // //   this.setState({
  // //     product: request.results,
  // //   });
  // // }

  // // componentDidMount() {
  // //   const { match } = this.props;
  // //   const { params } = match;
  // //   const { id } = params;
  // //   const { products } = this.props.location.state
  // //   console.log('NOSSO TESTE', products)
  // //   this.handleState(products)
  // // }

  //    handleState(products) {
  //    this.setState({
  //     products,
  //   });
  // }
  */
  render() {
    const { addState } = this.props;
    const {
      location: {
        state: {
          product,
        },
      },
    } = this.props;

    return (
      <div
        key={ product.title }
      >
        <p data-testid="product-detail-name">{product.title}</p>
        <img src={ product.thumbnail } alt={ product.title } />
        <p>{product.price}</p>
        <button
          type="button"
          onClick={ () => addState(product) }
          data-testid="product-detail-add-to-cart"
        >
          Adicionar ao carrinho
        </button>
        <Link
          to="/carrinho"
          data-testid="shopping-cart-button"
        >
          Carrinho de compras
        </Link>
      </div>
    );
  }
}

Details.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        title: PropTypes.string,
        price: PropTypes.number,
        thumbnail: PropTypes.string,
      }),
    }),
  }).isRequired,
  addState: PropTypes.func.isRequired,
};

export default Details;
