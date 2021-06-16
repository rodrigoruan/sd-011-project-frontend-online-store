import React, { Component } from 'react';
import './products-list.css';

import { ProductCard } from '../../components/Components';

export default class ProductsList extends Component {
  render() {
    const { products } = this.props;

    if (!products.length) return <p>Qual produto deseja pesquisar?</p>

    return (
      <div>
        <p>Lista de Produtos</p>
      </div>
    );
  }
}
