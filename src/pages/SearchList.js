import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ProductCard } from '../components/zComponentsMenu';
import Cart from '../components/Cart';

export default class SearchList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      empty: true,
    };
    this.showList = this.showList.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { products } = this.props;
    if (prevProps.products !== products) {
      this.setFalse();
    }
  }

  setFalse = () => {
    this.setState({ empty: false });
  };

  showList = () => {
    const { products, handleAddToCart } = this.props;
    const { empty } = this.state;
    if (!empty && products.length > 1) {
      return products.map((el, index) => (
        <ProductCard item={ el } key={ index } handleAddToCart={ handleAddToCart } />
      ));
    }
    if (!empty && products.length < 1) {
      return <>Nenhum produto foi encontrado</>;
    }
  };

  render() {
    const { products } = this.props;
    if (!products) {
      return <>Loading</>;
    }
    if (products) {
      return (
        <div className="search-list">
          <Cart />
          {this.showList()}
        </div>
      );
    }
  }
}

SearchList.propTypes = {
  handleAddToCart: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      thumbnail: PropTypes.string,
      title: PropTypes.string,
      price: PropTypes.number,
    }),
  ).isRequired,
};
