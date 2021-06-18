import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';
import ProductEvaluation from '../components/ProductEvaluation';

export default class ProductPage extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      product: {},
    };

    this.onMount = this.onMount.bind(this);
    this.renderProductPage = this.renderProductPage.bind(this);
  }

  async componentDidMount() {
    this.mounted = true;
    this.onMount(this.props);
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  onMount(props) {
    const { cat, id, name } = props.match.params;
    console.log(name);
    this.setState(
      { loading: true }, // Primeiro parâmetro da setState()!
      async () => {
        const { getProductsFromCategoryAndQuery } = props;
        const reqProds = await getProductsFromCategoryAndQuery(cat, name);
        const reqProd = reqProds.results.find((product) => product.id === id);
        console.log(reqProds);
        console.log(reqProd);
        if (this.mounted) {
          this.setState({
            loading: false,
            product: reqProd,
          });
        }
      },
    );
  }

  renderProductPage() {
    const { product } = this.state;
    if (product) {
      const { title, thumbnail, price } = product;
      return (
        <div data-testid="movie-details">
          <h3>
            <span data-testid="product-detail-name">
              { title }
            </span>
            - R$
            { price }
          </h3>
          <img alt={ title } src={ thumbnail } />
          <ProductEvaluation />
        </div>
      );
    }
    return (
      <div>
        <p>O produto não pôde ser encontrado.</p>
      </div>
    );
  }

  render() {
    const { loading } = this.state;

    return (
      <div>
        {loading ? <Loading /> : this.renderProductPage() }
      </div>
    );
  }
}

ProductPage.propTypes = {
  getProductsFromCategoryAndQuery: PropTypes.func,
}.isRequired;
