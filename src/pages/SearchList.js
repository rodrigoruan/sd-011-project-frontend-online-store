import React, { Component } from 'react';
import * as api from '../services/api';
import { Redirect } from 'react-router-dom';
import ItemProduct from '../components/ItemProduct';

export default class SearchList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
    this.showList = this.showList.bind(this);
  }

  componentDidUpdate() {}

  showList = () => {
    if (this.props.products) {
      return this.props.products.map((el) => {
        const { thumbnail, title, id, price } = el;
        return <ItemProduct thumbnail={thumbnail} title={title} id={id} price={price} />;
      });
    }
  };

  render() {
    const { products } = this.state;
    if (!products) {
      return <div>Loading</div>;
    } else {
      return <div className="search-list">{this.showList()}</div>;
    }
  }
}
