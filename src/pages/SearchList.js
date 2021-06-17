import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ProductCard } from '../components/zComponentsMenu';

export default class SearchList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      empty: true,
    };
    this.showList = this.showList.bind(this);
  }

  componentDidMount() {
  }

  componentDidUpdate(prevProps) {
    const { products } = this.props;
    if (prevProps.products !== products) {
      this.setState({ empty: false });
    }
  }

  showList = () => {
    const { products, handleAddToCart } = this.props;
    const { empty } = this.state;
    if (!empty && products.length > 1) {

      return products.map((el, index) => <ProductCard item={ el } key={ index } handleAddToCart={ handleAddToCart } />);

    }
    if (products.length < 1) {
      return <>Nenhum produto foi encontrado</>;
    }
  };

  render() {
    const { products } = this.props;
    if (!products) {
      return <>Loading</>;
    }
    if (products) {
      return <div className="search-list">{this.showList()}</div>;
    }
  }
}

SearchList.propTypes = {
  products: PropTypes.string,
};

SearchList.defaultProps = {
  products: '',
};
