import React, { Component } from 'react';
import ProductItem from '../components/ProductItem';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      cartSimulator: [
        {
          id: 1,
          title: 'Livro Harry Potter e a Pedra Filosofal',
          price: 80,
          thumbnail: 'image',
        },
        {
          id: 2,
          title: 'Livro Harry Potter e a Câmara Secreta',
          price: 40,
          thumbnail: 'image',
        },
        {
          id: 3,
          title: 'Livro Harry Potter e a Prisioneiro de Azkaban',
          price: 70,
          thumbnail: 'image',
        },
      ],
    };
    this.deleteItem = this.deleteItem.bind(this);
  }

  deleteItem({ target: { id } }) {
    const { cartSimulator } = this.state;
    cartSimulator.forEach((item) => {
      if (item.id !== id) {
        console.log(id);
        delete item[id];
        this.setState({ cartSimulator });
      }
    });
  }

  render() {
    const { cartSimulator } = this.state;
    if (cartSimulator.length === 0) {
      return <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>;
    }
    return (
      <div>
        {
          cartSimulator.map((cart) => (

            <ProductItem key={ cart.id } cart={ cart } deleteItem={ this.deleteItem } />

          ))
        }
      </div>
    );
  }
}

export default Cart;
