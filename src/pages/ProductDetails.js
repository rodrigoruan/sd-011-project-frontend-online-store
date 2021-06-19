import React from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Comments from '../components/Comments';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      comments: [],
      counter: 0,
    };

    this.getProduct = this.getProduct.bind(this);
    this.addComment = this.addComment.bind(this);
  }

  componentDidMount() {
    this.getProduct();
  }

  async getProduct() {
    const { match: { params: { id } }, category, query, cart } = this.props;
    const { results } = await getProductsFromCategoryAndQuery(category, query);
    const product = results.find((prod) => prod.id === id);
    this.setState({ product });
    if (cart[id]) {
      const { comments, counter } = cart[id];
      this.setState({ comments, counter });
    }
  }

  addComment(comment) {
    this.setState((state) => (
      { comments: [...state.comments, comment] }
    ));
    const { addCart } = this.props;
    addCart(this.state);
  }

  render() {
    const { product, comments } = this.state;
    const { addCart } = this.props;
    return (
      <div data-testid="product-detail-name">
        {(product === null)
          ? <p>Loading...</p>
          : <p>{ product.title }</p>}
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ () => {
            this.setState((state) => (
              { counter: (state.counter) ? state.counter + 1 : state.counter + 2 }
            ));
            addCart(this.state);
          } }
        >
          Adicionar ao carrinho
        </button>
        <Comments addComment={ this.addComment } comments={ comments } />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  addCart: PropTypes.string.isRequired,
  cart: PropTypes.objectOf(PropTypes.any).isRequired,
  query: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      id: PropTypes.string,
      price: PropTypes.number,
      thumbnail: PropTypes.string,
      title: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductDetails;
