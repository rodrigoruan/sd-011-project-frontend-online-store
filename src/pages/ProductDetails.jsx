import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MdShoppingCart } from 'react-icons/md';

class ProductDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      product: {},
      shoppingCart: [],
    };

    this.fetchProduct = this.fetchProduct.bind(this);
    this.addProductToShoppingCartState = this.addProductToShoppingCartState.bind(this);
  }

  componentDidMount() {
    this.fetchProduct();
  }

  async fetchProduct() {
    const { match: { params: { id } } } = this.props;
    const response = await fetch(`https://api.mercadolibre.com/items/${id}?include_attributes=all`);
    const responseJSON = await response.json();
    this.setState({ product: responseJSON });
  }

  addProductToShoppingCartState(item) {
    const { shoppingCart } = this.state;
    this.setState({
      shoppingCart: [...shoppingCart, item],
    });
    console.log(shoppingCart);
  }

  render() {
    const { product: { title, price, thumbnail, attributes }, shoppingCart } = this.state;
    const { product } = this.state;
    return (
      <section>
        <p data-testid="product-detail-name">{ title }</p>
        <p>{ price }</p>
        <img src={ thumbnail } alt="product" />
        <div>
          {!attributes ? null : attributes.map((spec) => (
            <p key={ spec.id }>
              { spec.name }
              :
              {' '}
              { spec.value_name }
            </p>))}
        </div>
        <button
          data-testid="product-detail-add-to-cart"
          onClick={ () => this.addProductToShoppingCartState(product) }
          type="button"
        >
          ADICIONAR AO CARRINHO
        </button>
        <Link
          data-testid="shopping-cart-button"
          to={ {
            pathname: '/shopping-cart',
            state: { shoppingCart },
          } }
        >
          <MdShoppingCart />
        </Link>
      </section>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
}.isRequired;

export default ProductDetails;
