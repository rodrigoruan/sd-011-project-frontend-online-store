import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';
import { Loading, CartButton } from '../components/index';
import ProductDetailCard from '../components/ProductDetailCard';
import AvaliaProduto from '../components/AvaliaProduto';

class DetalhesProduto extends Component {
  constructor() {
    super();

    this.state = {
      itemsArr: [],
      loading: true,
      ratings: [],
      comments: [],
    };

    this.fetchProducts = this.fetchProducts.bind(this);
    this.saveRating = this.saveRating.bind(this);
  }

  componentDidMount() {
    this.fetchProducts();
    this.getRatings();
  }

  getRatings() {
    const savedRatings = localStorage.getItem('ratings');
    const savedComments = localStorage.getItem('comments');
    this.setState({ ratings: savedRatings, comments: savedComments });
  }

  async fetchProducts() {
    const { match } = this.props;
    const { category_id: catId, title } = match.params;
    const resp = await getProductsFromCategoryAndQuery(catId, title);

    this.setState({
      itemsArr: resp.results,
      loading: false,
    });
  }

  saveRating(comment, rating) {
    localStorage.setItem('comments', comment);
    localStorage.setItem('ratings', rating);
    this.setState({ ratings: rating, comments: comment });
  }

  render() {
    const { ratings, comments } = this.state;
    const { match } = this.props;
    const { product_id: productId } = match.params;
    const { itemsArr, loading } = this.state;

    if (loading) {
      return (
        <div>
          <CartButton quantityTotal={ 0 } />
          <Loading />
        </div>
      );
    }
    const produto = itemsArr.find((produc) => produc.id === productId);
    const {
      title, thumbnail, price, id, shipping: { free_shipping: freeShipping } } = produto;
    const shippingStatus = freeShipping
      ? <p data-testid="free-shipping">Frete Gratis</p> : <p>Frete Pago</p>;

    return (
      <div>
        <p>{shippingStatus}</p>
        <ProductDetailCard
          id={ id }
          key={ id }
          title={ title }
          imgPath={ thumbnail }
          price={ price }
        />
        <AvaliaProduto formSubmit={ this.saveRating } />
        {ratings}
        {comments}
      </div>
    );
  }
}

DetalhesProduto.propTypes = {

};

export default DetalhesProduto;

DetalhesProduto.propTypes = {
  match: PropTypes.shape(
    PropTypes.object.isRequired,
  ).isRequired,
};
