import React, { Component } from 'react';
import * as api from '../services/api';
import { Redirect } from 'react-router-dom';
import ItemProduct from '../components/ItemProduct';

export default class SearchList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: '',
    };
    this.showList = this.showList.bind(this);
  }

  componentDidMount() {
    const { product } = this.props;
    this.getQuery(product);
  }

  componentDidUpdate() {
    const { product } = this.props;
    this.getQuery(product);
  }
  getQuery = async (product) => {
    const getList = await api.getProductsFromCategoryAndQuery('MLB1071', product);
    return this.setState({ products: getList.results });
  };

  showList = () => {
    return this.state.products.map((el) => {
      const { thumbnail, title, id, price } = el;
      return <ItemProduct thumbnail={thumbnail} title={title} id={id} price={price} />;
    });
  };

  render() {
    if (!this.state.products) {
      return <div>Loading...</div>;
    } else if (this.state.products.length < 1) {
      return <div>Nenhum produto foi encontrado</div>;
    } else if (!this.props.product) {
      return <Redirect to="/" />;
    }
    return <div className="search-list">{this.showList()}</div>;
  }
}
