import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';

export default class ProductPage extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      product: {},
    };

    this.onMount = this.onMount.bind(this);
    this.renderProductPage = this.renderProductPage.bind(this);
    this.verifyByTerms = this.verifyByTerms.bind(this);
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
    this.setState(
      { loading: true }, // Primeiro parâmetro da setState()!
      async () => {
        const { getProductsFromCategoryAndQuery } = props;
        const reqProds = await getProductsFromCategoryAndQuery(cat, name);
        const reqProd = reqProds.results.find((product) => product.id === id);
        let finalProd = reqProd;
        if (!reqProd) {
          const namArray = name.split(' ');
          finalProd = await this.verifyByTerms(props, namArray, cat, id);
        }
        if (this.mounted) {
          this.setState({
            loading: false,
            product: finalProd,
          });
        }
      },
    );
  }

  async verifyByTerms(props, array, cat, id) {
    console.log('Pesquisa secundária');
    const { getProductsFromCategoryAndQuery } = props;
    let finalProd;
    const responses = [];
    for (let i = 0; i < array.length; i += 1) {
      const term = array[i];
      responses.push(getProductsFromCategoryAndQuery(cat, term));
    }
    await Promise.all(responses).then((responsesArr) => {
      const tempProd = responsesArr.find(({ results }) => results
        .find((result) => result.id === id))
        .results.find((result) => result.id === id);
      if (tempProd) {
        finalProd = tempProd;
      }
    });
    return finalProd;
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
            {' - R$ '}
            { price }
          </h3>
          <img alt={ title } src={ thumbnail } />
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
