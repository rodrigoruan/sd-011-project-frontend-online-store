import React from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ProductCard from './ProductCard';
import NotFound from './NotFound';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.fetchProducts();
  }

  componentDidUpdate(prevProps) {
    const { categoryId, query } = this.props;
    if (prevProps.query !== query || prevProps.categoryId !== categoryId) {
      this.fetchProducts();
    }
  }

  async fetchProducts() {
    const { categoryId, query } = this.props;
    const data = await getProductsFromCategoryAndQuery(categoryId, query);

    const { results } = data;
    this.setState({
      products: results,
    });
  }

  render() {
    const { products } = this.state;
    const { forceAppUpdate } = this.props;
    return (
      <section>
        {
          products.length === 0 ? <NotFound /> : products
            .map((product) => (<ProductCard
              key={ product.id }
              product={ product }
              forceAppUpdate={ forceAppUpdate }
            />))
        }
      </section>
    );
  }
}

export default ProductList;

ProductList.propTypes = ({
  categoryId: PropTypes.string,
  query: PropTypes.string,
}).isRequired;
