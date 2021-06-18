import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ProductInCart.css';
import EachItem from './EachItem';

export default class ProductInCart extends Component {
  // constructor(props) {
  //   super(props);
  //   const { items } = this.props;
  //   this.state = {
  //     total: items.map((item) => (
  //       item.counter
  //     )),
  //     price: items.map((item) => (
  //       item.price
  //     )),
  //   };
  //   this.changeQuantity = this.changeQuantity.bind(this);
  // }

  // changeQuantity({ target }) {
  //   const { name, value } = target;
  //   const saveItem = JSON.parse(localStorage.getItem([value]));
  //   this.setState({
  //     total: saveItem.counter,
  //     price: saveItem.price,
  //   });

  //   if (name === 'increase') {
  //     this.setState({
  //       total: saveItem.counter += 1,
  //       price: saveItem.price,
  //     });
  //     saveItem.counter += 1;
  //     localStorage.setItem(value, JSON.stringify(saveItem));
  //   } else if (name === 'decrease') {
  //     this.setState({
  //       total: saveItem.counter -= 1,
  //       price: saveItem.price,
  //     });
  //     saveItem.counter -= 1;
  //     localStorage.setItem(value, JSON.stringify(saveItem));
  //   }
  // }

  render() {
    const { items } = this.props;
    return (
      <div className="mainCartContainer">
        {items.map((item) => (
          <EachItem item={ item } key={ item.id } />
        ))}
      </div>
    );
  }
}

ProductInCart.propTypes = {
  items: PropTypes.arrayOf(Object).isRequired,
};
