import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from './services/api';
import Loading from './Loading';

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
    console.log('oi');
    this.fetchProducts();
  }

  async fetchProducts() {
    console.log('teste');
    // const { search, categoria } = this.props.match.params;
    const { match } = this.props;
    const { search, categoria } = match.params;
    const resp = await getProductsFromCategoryAndQuery(categoria, search);
    console.log(resp);

    this.setState({
      itemsArr: resp.results,
      loading: false,
    });
  }

  render() {
    const { match } = this.props;
    const { item } = match.params;
    const { itemsArr, loading } = this.state;
    // if (loading) return <Loading />;
    const produto = itemsArr.find((produc) => produc.id === item);
    return (
      <div>
        { loading ? <Loading />
          : <p data-testid="product-detail-name">
            {produto.title}
            </p>}
      </div>
    );
  }
}

DetalhesProduto.propTypes = {

};

export default DetalhesProduto;
