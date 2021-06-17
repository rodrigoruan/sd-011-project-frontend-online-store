import React, { Component } from 'react';
import { ProductCard } from '../components/zComponentsMenu';

export default class SearchList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      empty: true,
    };
    this.showList = this.showList.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.products !== this.props.products) {
      this.setState({ empty: false });
    }
  }

  componentDidMount() {
    const { products } = this.props;
    this.setState({ products });
  }

  showList = () => {
    const { products } = this.props;
    const { empty } = this.state;
    if (!empty && products.length > 1) {
      return products.map((el, index) => <ProductCard item={el} key={index} />);
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
