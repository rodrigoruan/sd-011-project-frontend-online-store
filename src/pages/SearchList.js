import React, { Component } from 'react';
import * as api from '../services/api';
import { Link } from 'react-router-dom';

export default class SearchList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: '',
      productDetail: '',
    };
    this.showList = this.showList.bind(this);
    this.handleCart = this.handleCart.bind(this);
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

  handleCart = () => {};

  showList = () => {
    return this.state.products.map((el) => {
      const { thumbnail, title, id, price } = el;
      return (
        <div className="content" data-testid="product" key={id}>
          <img src={thumbnail} />
          <h3>{title}</h3>
          <h6>R${parseFloat(price, 10).toFixed(2)}</h6>
          <Link className="btn btn-success" to={{ pathname: `/product/${id}`, state: el }}>
            See more details!
          </Link>
          <button onClick={this.handleCart} className="btn btn-success">
            Add to cart!
          </button>
        </div>
      );
    });
  };

  render() {
    if (!this.state.products) {
      return <div>Loading...</div>;
    } else {
      return <div className="search-list">{this.showList()}</div>;
    }
  }
}
