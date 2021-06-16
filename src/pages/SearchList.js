import React, { Component } from 'react';
import * as api from '../services/api';
import { Redirect } from 'react-router-dom';

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
      return (
        <div className="content" data-testid="product" key={id}>
          <img src={thumbnail} />
          <h3>{title}</h3>
          <h6>R${parseFloat(price, 10).toFixed(2)}</h6>
          <button className="btn btn-success">Add to Cart!</button>
        </div>
      );
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
