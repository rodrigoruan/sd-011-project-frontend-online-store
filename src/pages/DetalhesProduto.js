import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';
import { Loading } from '../components/index';

class DetalhesProduto extends Component {
  constructor() {
    super();

    this.state = {
      itemsArr: [],
      loading: true,
    };

    this.fetchProducts = this.fetchProducts.bind(this);
  }

  componentDidMount() {
    this.fetchProducts();
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

  render() {
    const { match } = this.props;
    const { product_id: productId } = match.params;
    const { itemsArr, loading } = this.state;

    if (loading) return <Loading />;
    const produto = itemsArr.find((produc) => produc.id === productId);

    return (
      <div data-testid="product-detail-name">
        {produto.title}
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
