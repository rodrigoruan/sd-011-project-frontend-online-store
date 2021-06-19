import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ProductCard } from '../components/zComponentsMenu';
import {
  handleAddToCart,
  handleDecreaseQuantity,
  handleRemoveFromCart,
} from '../components/HandleButtons';

export default class SearchList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      empty: true,
    };
    this.showList = this.showList.bind(this);
  }

  componentDidMount() {}

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
    const { products } = this.props;
    const { empty } = this.state;
    if (!empty && products.length > 1) {
      return products.map((el, index) => (
        <ProductCard
          item={el}
          key={index}
          handleAddToCart={(el) => {
            handleAddToCart(el);
            return this.forceUpdate();
          }}
        />
      ));
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
  handleAddToCart: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      thumbnail: PropTypes.string,
      title: PropTypes.string,
      price: PropTypes.number,
    })
  ).isRequired,
};
